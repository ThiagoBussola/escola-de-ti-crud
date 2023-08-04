import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarrosModule } from './carros/carros.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/4000'), CarrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
