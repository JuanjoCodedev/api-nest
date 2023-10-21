import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity.user';
import { Stock } from 'src/almacen/stock/stock.entity';
import { Salida } from 'src/almacen/output/output.entity';
import { Entrada } from 'src/almacen/entry/entry.entity';

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
