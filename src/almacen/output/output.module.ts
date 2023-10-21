import { Module } from '@nestjs/common';
import { OutputService } from './output.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salida } from './output.entity';
import { StockModule } from '../stock/stock.module';
import { OutputController } from './output.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Salida]), StockModule],
  providers: [OutputService],
  controllers: [OutputController],
})
export class OutputModule {}
