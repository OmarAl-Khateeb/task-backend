import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      // {
      //   name: 'POSTER_SERVICE',
      //   transport: Transport.RMQ,
      //   options: {
      //     urls: ['amqpurl'],
      //     queue: 'poster_queue',
      //     queueOptions: {
      //       durable: false
      //     },
      //   },
      // },
      {
        name: 'POSTER_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
