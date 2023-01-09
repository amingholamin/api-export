
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import {AppService} from './app.service'


@Injectable()
export class TasksService {
    constructor(private readonly AppService:AppService){}
  private readonly logger = new Logger(TasksService.name);

  @Cron('1 * * * * *')
 async syncCron() {
  console.log("4444444444444");
   await this.AppService.saveReport();
}

}
