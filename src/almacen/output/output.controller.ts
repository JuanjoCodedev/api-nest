import { Controller, Body, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express'; // Importa Response
import { OutputService } from './output.service';
import { Auth } from 'src/autenticacion/decorators/auth.decorator';
import { Role } from 'src/autenticacion/constants/role.enum';
import { ArticleOutputDto } from './output.dto';
import { UpdateQuantityDto } from '../stock/stock.dto';

@Controller('output')
export class OutputController {
  constructor(private readonly outputService: OutputService) {}

  @Auth(Role.ADMIN)
  @Post('add-output/:id')
  async addSalida(@Body() outputDto: ArticleOutputDto, @Param('id') updated: UpdateQuantityDto, id: number, @Res() response: Response) {
    try {
      const result = await this.outputService.addOutput(outputDto, updated, id);
      response.status(200).json(result); // Envía la respuesta JSON con el código de estado 200 (OK)
    } catch (error) {
      response.status(400).json({ error: error.message }); // Envía una respuesta de error con el código de estado 400 (Bad Request)
    }
  }
}
