import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('')
export class Requisicion {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  uid: number;

  @Column()
  desid: number;

  @Column()
  cantidad: number;

  @Column()
  unidad: string;

  @Column()
  fecha: string;
}
