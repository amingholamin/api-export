import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async get(){
      return await this.appService.saveReport();
  }
  @Get('/getreport/:data')
  async s(@Param() param,@Res() res){
    res.download(`data/${param.data}.txt`)
}
}