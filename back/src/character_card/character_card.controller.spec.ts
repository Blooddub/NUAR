import { Test, TestingModule } from '@nestjs/testing';
import { CharacterCardController } from './character_card.controller';

describe('CharacterCardController', () => {
  let controller: CharacterCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterCardController],
    }).compile();

    controller = module.get<CharacterCardController>(CharacterCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
