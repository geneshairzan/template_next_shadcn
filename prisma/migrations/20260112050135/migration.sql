-- CreateTable
CREATE TABLE "sample" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "type" TEXT,
    "data" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "sample_pkey" PRIMARY KEY ("id")
);
