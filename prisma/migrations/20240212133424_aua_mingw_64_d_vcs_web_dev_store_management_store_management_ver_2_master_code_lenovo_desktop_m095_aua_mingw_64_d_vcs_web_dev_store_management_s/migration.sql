-- CreateTable
CREATE TABLE "professor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "lectureId" INTEGER NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lecture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "lecture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "lectureId" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "professor" ADD CONSTRAINT "professor_lectureId_fkey" FOREIGN KEY ("lectureId") REFERENCES "lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_lectureId_fkey" FOREIGN KEY ("lectureId") REFERENCES "lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
