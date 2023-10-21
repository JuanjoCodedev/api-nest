import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('almacen-stock')
export class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  descripcion: string;

  @Column()
  cantidad: number;

  @Column()
  estado: boolean;
}
