import { Body, Controller, Param, Put, Post } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/constants/role.enum';
import { ArticleDto, ArticleEntradaDto, UpdateQuantityDto } from './almacen.dto';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}

  @Post('add-entrada/:id')
  async addEntrada(@Body() entradaDto: ArticleEntradaDto, @Param('id') id: number) {
    const entradaGuardada = await this.almacenService.addEntrada(entradaDto);

    if (!entradaGuardada) return 'No se pudo agregar la entrada';

    const almacenStock = await this.almacenService.getStockId(id);

    if (!almacenStock) return 'Articulo no encontrado en almacen-stock';

    // Suma la cantidad a almacenStock.cantidad y asigna el resultado nuevamente
    almacenStock.cantidad += entradaDto.cantidad;

    await this.almacenService.updateQuantity(id, almacenStock);
  }

  @Post('add-output/:id')
  async addOutput(@Body() salidaDto: ArticleEntradaDto, @Param('id') id: number) {
    const entradaGuardada = await this.almacenService.addOutput(salidaDto);

    if (!entradaGuardada) return 'No se pudo agregar la entrada';

    const almacenStock = await this.almacenService.getStockId(id);

    if (!almacenStock) return 'Articulo no encontrado en almacen-stock';

    // Suma la cantidad a almacenStock.cantidad y asigna el resultado nuevamente
    almacenStock.cantidad -= salidaDto.cantidad;

    await this.almacenService.updateQuantity(id, almacenStock);
  }
}
