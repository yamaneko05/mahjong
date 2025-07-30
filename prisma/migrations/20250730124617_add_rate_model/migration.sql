/*
  Warnings:

  - You are about to drop the column `rate` on the `Section` table. All the data in the column will be lost.
  - Added the required column `rateId` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startingPoints` on the `Section` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Section" DROP COLUMN "rate",
ADD COLUMN     "rateId" TEXT NOT NULL,
DROP COLUMN "startingPoints",
ADD COLUMN     "startingPoints" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "Rate";

-- DropEnum
DROP TYPE "StartingPoints";

-- CreateTable
CREATE TABLE "Rate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Rate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
