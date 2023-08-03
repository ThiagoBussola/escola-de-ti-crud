import { Module } from '@nestjs/common';
import { CrudCupomService } from './crud-cupom.service';
import { CrudCupomController } from './crud-cupom.controller';

@Module({
  controllers: [CrudCupomController],
  providers: [CrudCupomService],
})
export class CrudCupomModule {}
