import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Convidado } from './entities/convidado.entity';
import { CreateConvidadoDto } from './dto/create-convidado.dto';
import { UpdateConvidadoDto } from './dto/update-convidado.dto';


@Injectable()
export class ConvidadoService {
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateConvidadoDto: UpdateConvidadoDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(Convidado.name, 'convidados') private convidadoModel: Model<Convidado>) {}

  async create(createConvidadoDto: CreateConvidadoDto): Promise<Convidado> {
    const createdConvidado = new this.convidadoModel(createConvidadoDto);
    return createdConvidado.save();
  }

  async findAll(): Promise<Convidado[]> {
    return this.convidadoModel.find().exec();
  }
}
