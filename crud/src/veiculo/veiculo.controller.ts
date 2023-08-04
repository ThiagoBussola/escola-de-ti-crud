import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Controller('veiculo')
export class VeiculoController {
    constructor(private readonly veiculoService: VeiculoService) { }

    @Post()
    create(@Body() createVeiculoDto: CreateVeiculoDto) {
        return this.veiculoService.create(createVeiculoDto);
    }

    @Get()
    findAll() {
        return this.veiculoService.findAll();
    }

    @Get(':modeloDoCarro/:ano')
    findOne(@Param('modeloDoCarro') modelo: string, @Param('ano') ano: string) {
        return this.veiculoService.findOne(modelo, +ano);
    }

    @Patch(':modeloDoCarro/:ano')
    update(@Param('modeloDoCarro') modelo: string, @Param('ano') ano: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
        return this.veiculoService.update(modelo, +ano, updateVeiculoDto);
    }

    @Delete(':modeloDoCarro/:ano')
    remove(@Param('modeloDoCarro') modelo: string, @Param('ano') ano: string) {
        return this.veiculoService.remove(modelo, +ano);
    }
}
