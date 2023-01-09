import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './job';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule,ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService,TasksService],
})
export class AppModule {}
