import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity.user';

export const conexionPostgreSQL = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: 4000,
  username: 'postgres',
  password: '',
  database: 'postgres',
  synchronize: false,
  entities: [User],
  logging: true,
});
