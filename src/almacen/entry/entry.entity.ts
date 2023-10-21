import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('almacen-entrada')
export class Entrada {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  desid: number;

  @Column()
  cantidad: number;
}
