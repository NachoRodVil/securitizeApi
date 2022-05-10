import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ExchangeRatesModule } from './exchangeRates/exchangeRates.module';
import { WalletModule } from './wallets/wallets.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://securitizeChallenge:e9tb8ILO5XWRdBPX@securitizechallenge.u6d5g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), WalletModule, ExchangeRatesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
