/*
  Warnings:

  - You are about to drop the column `plantId` on the `categories` table. All the data in the column will be lost.
  - Added the required column `plantCategoryId` to the `plants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_plantId_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "plantId";

-- AlterTable
ALTER TABLE "plants" ADD COLUMN     "plantCategoryId" INTEGER NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_plantCategoryId_fkey" FOREIGN KEY ("plantCategoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
