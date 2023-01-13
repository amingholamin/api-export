/*
  Warnings:

  - You are about to drop the `three` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "three";

-- CreateTable
CREATE TABLE "four" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idg" INTEGER NOT NULL,

    CONSTRAINT "four_pkey" PRIMARY KEY ("id")
);
