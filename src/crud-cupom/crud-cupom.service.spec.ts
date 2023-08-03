import { Test, TestingModule } from '@nestjs/testing';
import { CrudCupomService } from './crud-cupom.service';

describe('CrudCupomService', () => {
  let service: CrudCupomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudCupomService],
    }).compile();

    service = module.get<CrudCupomService>(CrudCupomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
