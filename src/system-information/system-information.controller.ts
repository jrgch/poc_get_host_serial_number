import { Controller, Get } from '@nestjs/common';
import { SystemInformationService, SystemSerialInfo } from './system-information.service';

@Controller('system-information')
export class SystemInformationController {
  constructor(private readonly systemInformationService: SystemInformationService) { }

  @Get()
  async getSerialNumber(): Promise<SystemSerialInfo | undefined> {
    return await this.systemInformationService.getSerialNumber();
  }
}
