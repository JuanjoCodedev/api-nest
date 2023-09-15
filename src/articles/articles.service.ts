import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticlesDTO } from './articles.dto';
import { ArticlesEntity } from './articles.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticlesEntity)
    private readonly articleServiceRepository: Repository<ArticlesEntity>,
  ) {}

  async findAll(): Promise<ArticlesEntity[]> {
    return await this.articleServiceRepository.find();
  }

  async createArticle(article: ArticlesDTO) {
    const createArticle = this.articleServiceRepository.create(article);
    return await this.articleServiceRepository.save(createArticle);
  }

  async updateArticle(@Param('pid') pid: number, updateArticleDTO: Partial<ArticlesDTO>) {
    const findArticleId = await this.articleServiceRepository.findOne({ where: { pid } });

    if (!findArticleId) throw new NotFoundException('No se encontro el articulo a actualizar');

    this.articleServiceRepository.merge(findArticleId, updateArticleDTO);
    return await this.articleServiceRepository.save(findArticleId);
  }

  async deleteArticle(@Param('pid') pid: number) {
    const findArticleId = await this.articleServiceRepository.findOne({ where: { pid } });

    if (!findArticleId) throw new NotFoundException('No se encontro el articulo a eliminar');

    const deleteArticle = await this.articleServiceRepository.delete(pid);
    return { message: 'Articulo eliminado', article: deleteArticle };
  }
}
