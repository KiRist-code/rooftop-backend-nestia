import { Module } from '@nestjs/common';
import { AppController } from './releaseController';
import { ReleaseService } from 'src/provider/release.service';


@Module({
  controllers: [AppController],
  providers: [ReleaseService]
})
export class ReleaseModule {}
