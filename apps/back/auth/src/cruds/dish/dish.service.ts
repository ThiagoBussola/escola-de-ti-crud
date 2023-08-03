import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class DishService {
  constructor(@InjectModel(Dish.name) private dishModel: Model<Dish> ){}
  create(createDishDto: CreateDishDto) {
    return  this.dishModel.create(createDishDto);
  }

  findAll() {
    
    return this.dishModel.find();
  }

  findOne(id: string) {
    
    return this.dishModel.findById(id);
  }

  update(id: string, updateDishDto: UpdateDishDto) {
    
    return this.dishModel.findByIdAndUpdate(id, updateDishDto );
  }

  remove(id: string) {

    return this.dishModel.findByIdAndRemove(id);
  }
}
