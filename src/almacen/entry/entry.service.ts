import { Injectable } from '@nestjs/common';
import { StockService } from '../stock/stock.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Entrada } from './entry.entity';
import { Repository } from 'typeorm';
import { ArticleEntryDto } from './entry.dto';
import { UpdateQuantityDto } from '../stock/stock.dto';

@Injectable()
export class EntryService {
  constructor(
    private readonly stockService: StockService,
    @InjectRepository(Entrada)
    private readonly entryRepository: Repository<Entrada>,
  ) {}

  async addEntry(entryDto: ArticleEntryDto, update: UpdateQuantityDto, id: number) {
    const entry = this.entryRepository.create(entryDto);

    if (!entry) return 'No se pudo agregar la salida';

    const almacenStock = await this.stockService.getStockId(id);

    if (!almacenStock) return 'Articulo no encontrado en almacen-stock';

    almacenStock.cantidad += entry.cantidad;

    if (almacenStock.cantidad > 0) {
      almacenStock.estado = true;
    }

    try {
      await this.stockService.updateQuantity(update, almacenStock);

      const entrySaved = await this.entryRepository.save(entry);

      return entrySaved;
    } catch (error) {
      throw new Error('Error al actualizar almacen-stock');
    }
  }
}
