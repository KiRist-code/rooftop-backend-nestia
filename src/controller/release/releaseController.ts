import { Controller, Get } from '@nestjs/common';
import { TypedRoute, TypedQuery } from '@nestia/core';
import { ReleaseService } from 'src/provider/release.service';

interface AlbumList {
  id: string;
  name: string;
  date: Date;
}

@Controller('release')
export class AppController {
  constructor(private readonly releaseService: ReleaseService) {}

  @TypedRoute.Get()
  getHello(): string {
    return this.releaseService.getHello();
  }

  @TypedRoute.Get()
  getAllAlbums(): Promise<AlbumList[]> | undefined {
    return undefined
  }
}
