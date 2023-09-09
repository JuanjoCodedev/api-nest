import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity';

export const conexionPostgreSQL = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT, 10),
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: false,
  entities: [User],
  logging: true,
});
