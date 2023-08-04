import { DataSource } from 'typeorm';
import { Achivement } from '../achivement/entities/achivement.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pguser',
        password: 'pgpassword',
        database: 'nestjs',
        entities: [Achivement],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
