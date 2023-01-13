import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import * as fs from 'fs';
import { typeDatabase } from './interface/datatype';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async saveReport(brancheId?: number, beginDate?: string, endDate?: string) {
    const client1 = new PrismaClient({
      datasources: {
        db: { url: 'postgresql://admin:admin@127.0.0.1:64048/testone' },
      },
    });
    const client2 = new PrismaClient({
      datasources: {
        db: { url: 'postgresql://admin:admin@127.0.0.1:64048/testtwo' },
      },
    });

    let data: [typeDatabase];
    if (brancheId) {
      data =
        await client2.$queryRaw`Select id From three Where idg = ${brancheId}`;
    } else {
      data = await client2.$queryRaw`Select id From three`;
    }

    if (!data.length) {
      throw console.error('notFound');
    }
    let databaseData;
    const inClause = data.map((x) => x.id).join();
    if (beginDate && endDate) {
      let converBeginDate = new Date(beginDate);
      let converBEndDate = new Date(endDate);

      databaseData = await client1.$queryRawUnsafe(
        `Select * From two Inner Join one On two.oneid=one.id Where oneid in (${inClause}) And "createdAt" < $1  Or "createdAt" = $1 And "createdAt" > $2 Or "createdAt" = $2 `,
        converBEndDate,
        converBeginDate
      );
    } else {
      let today = new Date();
      let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

      databaseData = await client1.$queryRawUnsafe(
        `Select * From two Inner Join one On two.oneid=one.id Where oneid in (${inClause}) And "createdAt" < $1  Or "createdAt" = $1 And "createdAt" > $2 Or "createdAt" = $2 `,
        today,
        yesterday,
      );
    }

    let filename =
      new Date().getFullYear() +
      '-' +
      ('0' + (new Date().getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + new Date().getDate()).slice(-2);

    if (brancheId) {
      filename = randomUUID();
    }

    await fs.writeFileSync(
      `data/${filename}.txt`,
      JSON.stringify(databaseData),
    );
    return filename;
  }
}

