/*
  Warnings:

  - You are about to drop the column `plantId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[donorId]` on the table `plants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `donorId` to the `plants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_plantId_fkey";

-- DropIndex
DROP INDEX "users_plantId_key";

-- AlterTable
ALTER TABLE "plants" ADD COLUMN     "donorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "plantId";

-- CreateIndex
CREATE UNIQUE INDEX "plants_donorId_key" ON "plants"("donorId");

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
