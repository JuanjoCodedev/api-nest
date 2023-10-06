import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('almacen-stock')
export class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  descripcion: string;

  @Column()
  cantidad: number;
}

@Entity('almacen-entrada')
export class Entrada {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  desid: number;

  @Column()
  cantidad: number;
}

@Entity('almacen-salida')
export class Salida {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  desid: number;

  @Column()
  cantidad: number;
}
