import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ExchangeRate } from "./exchangeRates.models";

@Injectable()
export class ExchangeRatesService {
    constructor(@InjectModel('ExchangeRate') private readonly exchangeRateModel: Model<ExchangeRate>) { }

    async insertER(currency: string, value: number) {
        const newER = new this.exchangeRateModel({ currency, value })
        await newER.save()
    }

    async retriveERs() {
        const eRs = await this.exchangeRateModel.find().exec()
        const eRsMapped = eRs.map(exchangeRate => ({ id: exchangeRate.id, currency: exchangeRate.currency, value: exchangeRate.value }))
        return eRsMapped as ExchangeRate[]
    }

    async changeERvalue(id: string, value: number) {
        const ER = await this.findER(id)
        ER.value = value
        await ER.save()

    }

    private async findER(id: string) {
        let ER
        try {
            ER = await this.exchangeRateModel.findById(id)
        } catch (error) {
            throw new Error('Could not find the Exchange Rate')
        }
        if (!ER) {
            throw new Error('Could not find the Exchange Rate')
        }
        return ER as ExchangeRate
    }
}
