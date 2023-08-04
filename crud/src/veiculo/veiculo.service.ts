import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Veiculo } from './schemas/veiculo.schema';
import { Model } from 'mongoose';

@Injectable()
export class VeiculoService {
    constructor(@InjectModel(Veiculo.name) private veiculoModel: Model<Veiculo>) { }
    async create(createVeiculoDto: CreateVeiculoDto) {
        const createdVeiculo = new this.veiculoModel(createVeiculoDto);
        return createdVeiculo.save()
    }

    async findAll() {
        return this.veiculoModel.find().exec()
    }

    async findOne(modeloDoCarro: string, anoDoCarro: number) {
        return this.veiculoModel.find({ modelo: modeloDoCarro, ano: anoDoCarro }).exec()
    }

    async update(modeloDoCarro: string, anoDoCarro: number, updateVeiculoDto: UpdateVeiculoDto) {
        return this.veiculoModel.findOneAndUpdate({ modelo: modeloDoCarro, ano: anoDoCarro }, updateVeiculoDto).exec()
    }

    async remove(modeloDoCarro: string, anoDoCarro: number) {
        return this.veiculoModel.findOneAndDelete({ modelo: modeloDoCarro, ano: anoDoCarro }).exec()
    }
}
