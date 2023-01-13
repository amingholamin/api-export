/*
  Warnings:

  - You are about to drop the `one` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `two` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "two" DROP CONSTRAINT "two_oneid_fkey";

-- DropTable
DROP TABLE "one";

-- DropTable
DROP TABLE "two";

-- CreateTable
CREATE TABLE "three" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idg" INTEGER NOT NULL,

    CONSTRAINT "three_pkey" PRIMARY KEY ("id")
);
