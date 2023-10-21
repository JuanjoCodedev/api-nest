import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('almacen-salida')
export class Salida {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  desid: number;

  @Column()
  cantidad: number;
}
