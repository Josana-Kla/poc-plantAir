-- CreateTable
CREATE TABLE "plants" (
    "id" SERIAL NOT NULL,
    "plantName" VARCHAR(100) NOT NULL,
    "grownPlantSize" VARCHAR(15) NOT NULL,
    "image" VARCHAR(2000) NOT NULL,
    "status" VARCHAR(10) NOT NULL DEFAULT 'available',
    "description" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "photo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(40) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plants_plantName_key" ON "plants"("plantName");

-- CreateIndex
CREATE UNIQUE INDEX "users_plantId_key" ON "users"("plantId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "plants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "plants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
