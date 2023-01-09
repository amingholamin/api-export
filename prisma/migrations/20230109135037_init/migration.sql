-- CreateTable
CREATE TABLE "one" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "one_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "two" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "oneId" INTEGER NOT NULL,

    CONSTRAINT "two_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "two" ADD CONSTRAINT "two_oneId_fkey" FOREIGN KEY ("oneId") REFERENCES "one"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
