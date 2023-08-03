import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
  constructor(@InjectModel(Evento.name) private eventoModel: Model<Evento>) {}

  async create(createEventoDto: CreateEventoDto) {
    const novoEvento = this.eventoModel.create(createEventoDto);
    return novoEvento;
  }

  findAll() {
    const eventos = this.eventoModel.find();
    return eventos;
  }

  findOne(id: string) {
    const evento = this.eventoModel.findById(id);
    return evento;
  }

  update(id: string, updateEventoDto: UpdateEventoDto) {
    const eventoAtualizado = this.eventoModel.findByIdAndUpdate(
      id,
      updateEventoDto,
      { new: true },
    );

    return eventoAtualizado;
  }

  remove(id: string) {
    this.eventoModel.findByIdAndDelete(id);
    return `Evento ${id} removido com sucesso!`;
  }
}
