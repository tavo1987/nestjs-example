import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const fullName = 'Hello, NestJS';
    return fullName;
  }

  getWelcome(): string {
    const msg = 'Welcome';
    return msg;
  }
}
