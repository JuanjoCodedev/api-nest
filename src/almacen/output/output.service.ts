import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Salida } from './output.entity';
import { Repository } from 'typeorm';
import { ArticleOutputDto } from './output.dto';
import { UpdateQuantityDto } from '../stock/stock.dto';
import { StockService } from '../stock/stock.service';

@Injectable()
export class OutputService {
  constructor(
    private readonly stockService: StockService,
    @InjectRepository(Salida)
    private readonly outputRepository: Repository<Salida>,
  ) {}

  async addOutput(outputDto: ArticleOutputDto, update: UpdateQuantityDto, id: number) {
    const outputEntry = this.outputRepository.create(outputDto);

    if (!outputEntry) return { error: 'No se pudo agregar la salida' };

    const almacenStock = await this.stockService.getStockId(id);

    if (!almacenStock) return { error: 'Articulo no encontrado en almacen-stock' };

    if (almacenStock.cantidad === 0) return { error: 'articulo no disponible' };

    almacenStock.cantidad -= outputEntry.cantidad;

    if (almacenStock.cantidad <= 0) {
      almacenStock.estado = false;
    }
    try {
      await this.stockService.updateQuantity(update, almacenStock);

      const output = await this.outputRepository.save(outputEntry);

      return { success: 'Salida agregada exitosamente', output };
    } catch (error) {
      throw new Error('Error al actualizar almacen-stock');
    }
  }
}
