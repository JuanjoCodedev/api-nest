import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  cid: number;

  @Column()
  uid: number;

  @Column()
  pid: number;

  @Column()
  quantity: number;

  @Column()
  sub: number;
}
