import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CrudCupomService } from './crud-cupom.service';
import { CreateCrudCupomDto } from './dto/create-crud-cupom.dto';
import { UpdateCrudCupomDto } from './dto/update-crud-cupom.dto';

@Controller('crud-cupom')
export class CrudCupomController {
  constructor(private readonly crudCupomService: CrudCupomService) {}

  @Post()
  create(@Body() createCrudCupomDto: CreateCrudCupomDto) {
    return this.crudCupomService.create(createCrudCupomDto);
  }

  @Get()
  findAll() {
    return this.crudCupomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudCupomService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCrudCupomDto: UpdateCrudCupomDto) {
  //   return this.crudCupomService.update(+id, updateCrudCupomDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudCupomService.remove(+id);
  }
}
