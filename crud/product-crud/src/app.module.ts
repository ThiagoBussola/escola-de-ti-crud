import { Module, NestModule, MiddlewareConsumer, RequestMethod, ValidationPipe } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/nest'), ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}