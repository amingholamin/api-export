import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import * as fs from 'fs';
import { typeDatabase } from './interface/datatype';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async saveReport() {
    let data: [typeDatabase] = await this.prisma
      .$queryRaw`Select id From one Where code In ('10','20')`;

    if (!data.length) {
      throw console.error('notFound');
    }

    const inClause = data.map((x) => x.id).join();
    console.log('0000000000000000');
    console.log(inClause);

    let query = `SELECT * from two   Inner Join one On two."oneId"=one.id
    Where "oneId" In (${inClause})
    `;
    // let query = `SELECT * from two  Where id In (${inClause})`;

    let databaseData = await this.prisma.$queryRawUnsafe(query);
   
    var today =
      new Date().getFullYear() +
      '-' +
      ('0' + (new Date().getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + new Date().getDate()).slice(-2);
   await fs.writeFileSync(`data/${today}.txt`, JSON.stringify(databaseData));
    return 'ok';
  }
}
