import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('POSTER_SERVICE') private readonly posterClient: ClientProxy,
    ) {}
  getHello(): string {
    return 'Hello World!';
  }

  // getPosterEvent(scale: number) {
  //   this.posterClient.emit(
  //     'generate-poster',
  //     scale
  //   );
  // }

  async getPosterMessage(scale: number) {
    return await lastValueFrom(this.posterClient.send({ cmd: 'get-poster' }, scale))
  }
}
