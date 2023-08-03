import { Test, TestingModule } from '@nestjs/testing';
import { CrudCupomController } from './crud-cupom.controller';
import { CrudCupomService } from './crud-cupom.service';

describe('CrudCupomController', () => {
  let controller: CrudCupomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudCupomController],
      providers: [CrudCupomService],
    }).compile();

    controller = module.get<CrudCupomController>(CrudCupomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
