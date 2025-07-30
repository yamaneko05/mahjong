/*
  Warnings:

  - You are about to drop the column `point` on the `SectionResult` table. All the data in the column will be lost.
  - Added the required column `result` to the `SectionResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SectionResult" DROP COLUMN "point",
ADD COLUMN     "result" INTEGER NOT NULL;
