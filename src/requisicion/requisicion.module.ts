import { Module } from '@nestjs/common';
import { RequisicionController } from './requisicion.controller';
import { RequisicionService } from './requisicion.service';
import { RequisicionService } from './requisicion.service';

@Module({
  controllers: [RequisicionController],
  providers: [RequisicionService]
})
export class RequisicionModule {}
