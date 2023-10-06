import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity.user';
import { Entrada, Salida, Stock } from 'src/almacen/almacen.entity';

export const conexionPostgreSQL = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: 4000,
  username: 'postgres',
  password: '852456',
  database: 'postgres',
  synchronize: false,
  entities: [User, Stock, Entrada, Salida],
  logging: ['error', 'warn', 'query'],
});
