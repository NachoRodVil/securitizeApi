import { Body, Controller, Get, Patch, Post, Param } from "@nestjs/common";
import { WalletsService } from "./wallets.service";

@Controller('wallets')
export class WalletsController {
    constructor(private readonly walletService: WalletsService) { }

    @Post()
    async createWallet(@Body('owner') owner: string, @Body('eth') eth: number) {
        try {
            await this.walletService.insertWallet(owner, eth)
            return 'A new wallet has been created'
        } catch (error) {
            throw new Error(error)
        }
    }

    @Get()
    async getWallets() {
        try {
            const wallets = await this.walletService.retriveWallets()
            return wallets
        } catch (error) {
            throw new Error(error)
        }
    }

    @Patch(':id')
    async updateFav(@Param('id') id: string) {
        try {
            await this.walletService.changeFav(id)
            return `Wallet ${id} favourite status has been updated`
        } catch (error) {
            throw new Error(error)
        }
    }
    
    @Patch('eth/:id')
    async updateEth(@Param('id') id: string, @Body('eth') eth: number) {
        try {
            await this.walletService.changeEth(id, eth)
            return `Wallet ${id} eth quantity has been updated`
        } catch (error) {
            throw new Error(error)
        }
    }
}
