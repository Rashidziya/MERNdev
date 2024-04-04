/*
  Warnings:

  - Added the required column `userid` to the `Todo2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo2" ADD COLUMN     "userid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo2" ADD CONSTRAINT "Todo2_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User2"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
