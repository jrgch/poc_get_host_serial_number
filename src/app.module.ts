import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemInformationModule } from './system-information/system-information.module';

@Module({
  imports: [SystemInformationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
