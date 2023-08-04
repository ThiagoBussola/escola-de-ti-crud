
import { Connection } from 'mongoose';
import { CarroSchema } from './schema/carros.schema';

export const carrosProviders = [
  {
    provide: 'CARRO_MODEL',
    useFactory: (connection: Connection) => connection.model('Carro', CarroSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];