import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity';

export const conexionPostgreSQL = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 4000,
  username: 'postgres',
  password: '852456',
  database: 'postgres',
  synchronize: false,
  entities: [User],
  logging: true,
});
