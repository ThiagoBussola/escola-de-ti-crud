import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';  
import { Carro } from './schema/carros.schema';


@Injectable()
export class CarrosService {
  
  constructor(
    @InjectModel(Carro.name) private carroModel: Model<Carro>
  ){}

  create(createCarroDto: CreateCarroDto): Promise<Carro> {
    const createdCar = new this.carroModel(createCarroDto);
    return createdCar.save();
  }

  async findAll(): Promise<Carro[]> {
    return this.carroModel.find().exec();
  }

  findOne(id: number) {
    return this.carroModel.findById(id);
  }

  update(id: number, updateCarroDto: UpdateCarroDto) {
    const updatedCar = this.carroModel.findByIdAndUpdate(id, updateCarroDto);
    return updatedCar;
  }

  remove(id: number) {
    const removedCar = this.carroModel.findByIdAndRemove(id)
    return removedCar;
  }
}
