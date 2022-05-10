import { Body, Controller, Get, Patch, Post, Param, NotFoundException } from "@nestjs/common";
import { ExchangeRatesService } from "./exchangeRates.service";

@Controller('exchangeRates')
export class ExchangeRatesController {
    constructor(private readonly exchangeRatesService: ExchangeRatesService) { }


    @Post()
    async createER(@Body('currency') currency: string, @Body('value') value: number) {
        try {
            this.exchangeRatesService.insertER(currency, value)
            return 'A new Exchange Rate has been created'
        } catch (error) {
            throw new Error(error)
        }
    }

    @Get()
    async getERs() {
        try {
            const eRs = await this.exchangeRatesService.retriveERs()
            return eRs
        } catch (error) {
            throw new Error(error)
        }
    }

    @Patch(':id')
    async updateERvalue(@Param('id') id: string, @Body('value') value: number) {
        try {
            await this.exchangeRatesService.changeERvalue(id, value)
            return `ER ${id} has been updated`
        } catch (error) {
            throw new Error(error.message)
        }
    }
}