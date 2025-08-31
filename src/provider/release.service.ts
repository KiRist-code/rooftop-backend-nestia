import { Injectable } from '@nestjs/common';

@Injectable()
export class ReleaseService {
  getHello(): string {
    return 'Hello World!';
  }
}
