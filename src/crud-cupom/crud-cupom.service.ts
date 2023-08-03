import { Injectable } from '@nestjs/common';
import { CreateCrudCupomDto } from './dto/create-crud-cupom.dto';
import { UpdateCrudCupomDto } from './dto/update-crud-cupom.dto';
import { Model } from 'mongoose';
import { Cupom } from './entities/crud-cupom.entity';

@Injectable()
export class CrudCupomService {

  constructor(@InjectableModel(Cupom.nome) private cupomModel<Cupom>) {}

  create(createCrudCupomDto: CreateCrudCupomDto) {
    return 'This action adds a new crudCupom';
  }

  findAll() {
   const buscaTodosCupons = this.CupomModel
  }

  findOne(id: number) {
    return `This action returns a #${id} crudCupom`;
  }

  update(id: number, updateCrudCupomDto: UpdateCrudCupomDto) {
    return `This action updates a #${id} crudCupom`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudCupom`;
  }
}
