import { Module } from '@nestjs/common';
import { AchivementModule } from './achivement/achivement.module';

@Module({
  imports: [AchivementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
