import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrada } from './entry.entity';
import { StockModule } from '../stock/stock.module';

@Module({
  imports: [TypeOrmModule.forFeature([Entrada]), StockModule],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
