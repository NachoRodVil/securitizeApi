import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Wallet } from "./wallets.model";

@Injectable()
export class WalletsService {
    constructor(@InjectModel('Wallet') private readonly walletModel: Model<Wallet>) { }

    async insertWallet(owner: string, eth: number) {
        const newWallet = new this.walletModel({ owner, eth, isFav: false })
        await newWallet.save()
    }

    async retriveWallets() {
        const wallets = await this.walletModel.find().exec()
        const walletsMapped = wallets.map(wallet => ({ id: wallet.id, owner: wallet.owner, eth: wallet.eth, isFav: wallet.isFav, createdAt: wallet.createdAt, updatedAt: wallet.updatedAt }))
        return walletsMapped as Wallet[]
    }

    async changeFav(id: string) {
        const wallet = await this.findSingleWallet(id)
        wallet.isFav = !wallet.isFav
        await wallet.save()
    }

    async changeEth(id: string, eth: number){
        const wallet = await this.findSingleWallet(id)
        wallet.eth = eth
        await wallet.save()
    }

    async findSingleWallet(id: string) {
        let wallet
        try {
            wallet = await this.walletModel.findById(id)
        } catch (error) {
            throw new Error('Could not find the wallet')
        }
        if (!wallet) {
            throw new Error('Could not find the wallet')
        }
        return wallet as Wallet

    }
}
