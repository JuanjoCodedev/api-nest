import { HttpException, Body, Controller, Post, Get, UseGuards, Patch, Param, NotFoundException, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesDTO } from './articles.dto';
import { ArticlesEntity } from './articles.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  @Get('/obtener-articulos')
  async findAll(): Promise<ArticlesEntity[]> {
    return await this.articleService.findAll();
  }

  @Post('/crear-articulo')
  async createArticle(@Body() article: ArticlesDTO) {
    await this.articleService.createArticle(article);
  }

  @Patch('/modificar-articulo')
  async updateArticle(@Param('pid') pid: number, @Body() updateArticle: ArticlesDTO) {
    await this.articleService.updateArticle(pid, updateArticle);
  }

  @Delete('/eliminar-articulo')
  async deleteArticle(@Param('pid') pid: number) {
    await this.articleService.deleteArticle(pid);
  }
}
