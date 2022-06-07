import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const fullName = 'Hello, NestJSsss';
    return fullName;
  }

  getWelcome(): string {
    const msg = 'Welcome';
    return msg;
  }
}
