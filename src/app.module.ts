import { Module } from '@nestjs/common';
import { UserModule } from './client/user.module';
import { conexionPostgreSQL } from './database/conexion';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, conexionPostgreSQL, AuthModule, ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
