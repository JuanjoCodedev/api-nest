import { Module } from '@nestjs/common';
import { AlmacenController } from './almacen.controller';
import { AlmacenService } from './almacen.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrada, Salida, Stock } from './almacen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stock, Entrada, Salida])],
  controllers: [AlmacenController],
  providers: [AlmacenService],
})
export class AlmacenModule {}
