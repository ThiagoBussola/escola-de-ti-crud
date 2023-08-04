import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventosModule,
    MongooseModule.forRoot('mongodb://0.0.0.0/crud-eventos'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
