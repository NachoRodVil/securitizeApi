import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletsController } from './wallets.controller';
import { WalletSchema } from './wallets.model';
import { WalletsService } from './wallets.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Wallet', schema: WalletSchema}])],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletModule {}
