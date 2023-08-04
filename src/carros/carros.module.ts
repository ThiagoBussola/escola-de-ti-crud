import { Module } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carro, CarroSchema } from './schema/carros.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Carro.name, schema: CarroSchema }])],
  controllers: [CarrosController],
  providers: [CarrosService],
  exports: [CarrosService]
})
export class CarrosModule {}
