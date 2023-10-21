import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Requisicion } from './requisicion.entity';
import { RequisicionDto } from './requisicion.dto';
import { StockService } from 'src/almacen/stock/stock.service';

@Injectable()
export class RequisicionService {
  constructor(
    private readonly stockRepository: StockService,
    @InjectRepository(Requisicion)
    private readonly rerquisicionRepository: Repository<Requisicion>,
  ) {}

  async addRequisicion(requisicionDto: RequisicionDto, id: number) {
    const search = this.stockRepository.getStockId(id);

    if (!search) return 'Articulo no encontrado';
    console.log('Este es el resultado de la consulta: ', search);

    const createRequisicion = this.rerquisicionRepository.create(requisicionDto);
    return this.rerquisicionRepository.save(createRequisicion);
  }
}
