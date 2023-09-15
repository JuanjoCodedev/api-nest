import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user') // Nombre de la tabla en la base de datos
export class User {
  @PrimaryGeneratedColumn('uuid')
  uid: number;

  @Column({ unique: true })
  useremail: string;

  @Column()
  userpassword: string;

  @Column()
  username: string;

  @Column()
  userlastname: string;

  @Column()
  userdepartament: string;

  @Column()
  usercity: string;

  @Column()
  useraddress: string;

  @Column() // Campo para almacenar roles como un array de strings
  roles: number;

  @Column()
  userstate: boolean;

  @Column()
  userphone: string;

  @Column()
  did: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    const saltOrRounds = 10;
    this.userpassword = await bcrypt.hash(this.userpassword, saltOrRounds);
  }
}
