import { Controller, Body, Param, Post } from '@nestjs/common';
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
  async addSalida(@Body() outputDto: ArticleOutputDto, @Param('id') updated: UpdateQuantityDto, id: number) {
    await this.outputService.addOutput(outputDto, updated, id);
  }
}
