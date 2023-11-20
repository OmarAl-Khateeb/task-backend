import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generate-poster')
  @Header('Content-Type', 'image/png')
  async getPoster(@Query('scale') scale: number, @Res() response: Response) {
    const result: { type: string, data: number[] } = await this.appService.getPosterMessage(scale);
    console.log(result)
    const buffer = Buffer.from(result.data);
    response.end(result);
  }
}
