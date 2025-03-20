import { Test, TestingModule } from '@nestjs/testing';
import { SystemInformationService } from './system-information.service';

describe('SystemInformationService', () => {
  let service: SystemInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemInformationService],
    }).compile();

    service = module.get<SystemInformationService>(SystemInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
