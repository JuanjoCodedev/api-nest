import { Module } from '@nestjs/common';
import { UserModule } from './client/user.module';
import { conexionPostgreSQL } from './database/conexion';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AlmacenModule } from './almacen/almacen.module';

@Module({
  imports: [UserModule, conexionPostgreSQL, AuthModule, ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }), AlmacenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
