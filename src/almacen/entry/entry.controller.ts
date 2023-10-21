import { Body, Controller, Param, Post } from '@nestjs/common';
import { EntryService } from './entry.service';
import { Auth } from 'src/autenticacion/decorators/auth.decorator';
import { Role } from 'src/autenticacion/constants/role.enum';
import { ArticleEntryDto } from './entry.dto';
import { UpdateQuantityDto } from '../stock/stock.dto';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Auth(Role.ADMIN)
  @Post('add-entry/:id')
  async addEntrada(@Body() entryDto: ArticleEntryDto, @Param('id') updated: UpdateQuantityDto, id: number) {
    await this.entryService.addEntry(entryDto, updated, id);
  }
}
