import { Inject, Injectable } from '@nestjs/common';
import { CreateAchivementDto } from './dto/create-achivement.dto';
import { UpdateAchivementDto } from './dto/update-achivement.dto';
import { Achivement } from './entities/achivement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AchivementService {
  constructor(
    @Inject('ACHIVEMENT_REPOSITORY')
    private achivementRepository: Repository<Achivement>,
  ) {}

  create(createAchivementDto: CreateAchivementDto) {
    const createdAchivement =
      this.achivementRepository.create(createAchivementDto);
    return this.achivementRepository.save(createdAchivement);
  }

  findAll() {
    return this.achivementRepository.find();
  }

  findOne(id: string) {
    return this.achivementRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateAchivementDto: UpdateAchivementDto) {
    const updatedAchivement = this.achivementRepository.update(
      id,
      updateAchivementDto,
    );
    return updatedAchivement;
  }

  delete(id: string) {
    return this.achivementRepository.delete(id);
  }
}
