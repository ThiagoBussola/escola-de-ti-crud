import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Package } from './entities/package.entity';
import { Model } from 'mongoose';

@Injectable()
export class PackageService {
  constructor(
    @InjectModel(Package.name) private packageModel: Model<Package>
  ) {}

  create(createPackageDto: CreatePackageDto) {
    return this.packageModel.create(createPackageDto);
  }

  findAll() {
    return this.packageModel.find();
  }

  findOne(id: string) {
    return this.packageModel.findById(id);
  }

  update(id: string, updatePackageDto: UpdatePackageDto) {
    return this.packageModel.findByIdAndUpdate(id, updatePackageDto);
  }

  remove(id: string) {
    return this.packageModel.findByIdAndDelete(id);
  }
}
