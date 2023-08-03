import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudCupomModule } from './crud-cupom/crud-cupom.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CrudCupomModule], //MongooseModule.forRoot('mongodb://localhost/nest')
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
