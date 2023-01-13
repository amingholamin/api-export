-- AlterTable
ALTER TABLE "four" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '1 year';
