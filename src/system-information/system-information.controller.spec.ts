import { Test, TestingModule } from '@nestjs/testing';
import { SystemInformationController } from './system-information.controller';
import { SystemInformationService } from './system-information.service';

describe('SystemInformationController', () => {
  let controller: SystemInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemInformationController],
      providers: [SystemInformationService],
    }).compile();

    controller = module.get<SystemInformationController>(SystemInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
