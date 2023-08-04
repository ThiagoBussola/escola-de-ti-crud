import { DataSource } from 'typeorm';
import { Achivement } from './entities/achivement.entity';

export const achivementProviders = [
  {
    provide: 'ACHIVEMENT_REPOSITORY',
    useFactory: (connection: DataSource) =>
      connection.getRepository(Achivement),
    inject: ['DATA_SOURCE'],
  },
];
