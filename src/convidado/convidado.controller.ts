import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvidadoService } from './convidado.service';
import { CreateConvidadoDto } from './dto/create-convidado.dto';
import { UpdateConvidadoDto } from './dto/update-convidado.dto';

@Controller('convidado')
export class ConvidadoController {
  constructor(private readonly convidadoService: ConvidadoService) {}

  @Post()
  create(@Body() createConvidadoDto: CreateConvidadoDto) {
    return this.convidadoService.create(createConvidadoDto);
  }

  @Get()
  findAll() {
    return this.convidadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convidadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvidadoDto: UpdateConvidadoDto) {
    return this.convidadoService.update(+id, updateConvidadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convidadoService.remove(+id);
  }
}
