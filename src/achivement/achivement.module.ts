import { Module } from '@nestjs/common';
import { AchivementService } from './achivement.service';
import { AchivementController } from './achivement.controller';
import { DatabaseModule } from '../util/database.module';
import { achivementProviders } from './achivement.repository';
@Module({
  imports: [DatabaseModule],
  controllers: [AchivementController],
  providers: [AchivementService, ...achivementProviders],
})
export class AchivementModule {}
