import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articles')
export class ArticlesEntity {
  @PrimaryGeneratedColumn('uuid')
  pid: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  quantity: number;

  @Column()
  state: boolean;
}
