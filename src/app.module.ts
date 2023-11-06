import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { conexionPostgreSQL } from './database/conexion';
import { AuthModule } from './autenticacion/auth.module';
import { ConfigModule } from '@nestjs/config';
import { StockModule } from './almacen/stock/stock.module';
import { OutputModule } from './almacen/output/output.module';
import { EntryModule } from './almacen/entry/entry.module';
@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }), UserModule, conexionPostgreSQL, AuthModule, StockModule, OutputModule, EntryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
