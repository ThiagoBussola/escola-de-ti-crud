import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvidadoModule } from './convidado/convidado.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConvidadoModule,
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'convidados',
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
