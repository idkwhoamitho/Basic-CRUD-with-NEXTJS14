/*
  Warnings:

  - You are about to drop the `lecture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "professor" DROP CONSTRAINT "professor_lectureId_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_lectureId_fkey";

-- DropTable
DROP TABLE "lecture";

-- DropTable
DROP TABLE "professor";

-- DropTable
DROP TABLE "student";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productTag" (
    "id" SERIAL NOT NULL,
    "productTagName" TEXT NOT NULL,

    CONSTRAINT "productTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "ProductName" TEXT NOT NULL,
    "ProductPrice" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "productTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
