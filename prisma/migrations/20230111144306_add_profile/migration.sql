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
    "idc" INTEGER NOT NULL,
    "oneid" INTEGER NOT NULL,

    CONSTRAINT "two_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "two" ADD CONSTRAINT "two_oneid_fkey" FOREIGN KEY ("oneid") REFERENCES "one"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
