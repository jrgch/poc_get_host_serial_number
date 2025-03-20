import { Module } from '@nestjs/common';
import { SystemInformationService } from './system-information.service';
import { SystemInformationController } from './system-information.controller';

@Module({
  controllers: [SystemInformationController],
  providers: [SystemInformationService],
})
export class SystemInformationModule {}
