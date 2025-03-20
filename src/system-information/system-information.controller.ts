import { Controller, Get } from '@nestjs/common';
import { SystemInformationService } from './system-information.service';

@Controller('system-information')
export class SystemInformationController {
  constructor(private readonly systemInformationService: SystemInformationService) { }

  @Get()
  async getSerialNumber(): Promise<string | undefined> {
    return await this.systemInformationService.getSerialNumber();
  }
}
