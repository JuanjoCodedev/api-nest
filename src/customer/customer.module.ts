import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { User } from '../database/entity.user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
