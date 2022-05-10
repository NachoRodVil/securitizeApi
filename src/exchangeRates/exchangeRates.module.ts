import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExchangeRatesController } from './exchangeRates.controller';
import { ERSchema } from './exchangeRates.models';
import { ExchangeRatesService } from './exchangeRates.service';


@Module({
  imports: [MongooseModule.forFeature([{name: 'ExchangeRate', schema: ERSchema}])],
  controllers: [ExchangeRatesController],
  providers: [ExchangeRatesService],
})
export class ExchangeRatesModule {}
