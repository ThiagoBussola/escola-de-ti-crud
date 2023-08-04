import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AchivementService } from './achivement.service';
import { CreateAchivementDto } from './dto/create-achivement.dto';
import { UpdateAchivementDto } from './dto/update-achivement.dto';

@Controller('achivement')
export class AchivementController {
  constructor(private readonly achivementService: AchivementService) {}

  @Post()
  create(@Body() createAchivementDto: CreateAchivementDto) {
    return this.achivementService.create(createAchivementDto);
  }

  @Get()
  findAll() {
    return this.achivementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achivementService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAchivementDto: UpdateAchivementDto,
  ) {
    return this.achivementService.update(id, updateAchivementDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.achivementService.delete(id);
  }
}
