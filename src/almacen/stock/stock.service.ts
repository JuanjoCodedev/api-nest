import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from './stock.entity';
import { Repository } from 'typeorm';
import { UpdateQuantityDto } from './stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
  ) {}

  async createStock(stockDto: UpdateQuantityDto) {
    const newStock = this.stockRepository.create(stockDto);

    try {
      const stockSave = await this.stockRepository.save(newStock);
      return stockSave;
    } catch (error) {
      throw new Error('Error al ingresar datos');
    }
  }

  async getStockId(id: number) {
    try {
      return await this.stockRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error('Error al obtener almacen-stock');
    }
  }

  async updateQuantity(updated: UpdateQuantityDto, almacenStock: Stock): Promise<void> {
    try {
      await this.stockRepository.update(almacenStock.id, { cantidad: almacenStock.cantidad, estado: almacenStock.estado });
    } catch (error) {
      throw new Error('Error al actualizar almacen-stock');
    }
  }
}
