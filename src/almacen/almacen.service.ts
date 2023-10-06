import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entrada, Salida, Stock } from './almacen.entity';
import { Repository } from 'typeorm';
import { ArticleEntradaDto, ArticleSalidaDto } from './almacen.dto';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectRepository(Salida)
    private readonly salidaRepository: Repository<Salida>,
    @InjectRepository(Entrada)
    private readonly entradaRepository: Repository<Entrada>,
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
  ) {}

  async addEntrada(entradaDto: ArticleEntradaDto) {
    try {
      const newEntrada = this.entradaRepository.create(entradaDto);
      const entradaGuardada = await this.entradaRepository.save(newEntrada);
      return entradaGuardada;
    } catch (error) {
      console.log('Error al agregar entrada', error);
      return null;
    }
  }

  async addOutput(salidaDto: ArticleSalidaDto) {
    try {
      const newEntrada = this.salidaRepository.create(salidaDto);
      const entradaGuardada = await this.salidaRepository.save(newEntrada);
      return entradaGuardada;
    } catch (error) {
      console.log('Error al agregar entrada', error);
      return null;
    }
  }

  async getStockId(id: number) {
    try {
      return await this.stockRepository.findOne({ where: { id } });
    } catch (error) {
      console.error('Error al obtener almacen-stock:', error);
      return null;
    }
  }

  async updateQuantity(articleId: number, almacenStock: Stock): Promise<void> {
    try {
      await this.stockRepository.update(articleId, almacenStock);
    } catch (error) {
      // Manejar errores de base de datos aquí
      console.error('Error al actualizar almacen-stock:', error);
    }
  }
}
