-- CreateTable
CREATE TABLE "symbol_overview" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "symbol_id" UUID NOT NULL,
    "asset_type" TEXT,
    "description" TEXT,
    "cik" TEXT,
    "sector" TEXT,
    "industry" TEXT,
    "country" TEXT,
    "address" TEXT,
    "official_site" TEXT,
    "market_capitalization" BIGINT,
    "ebitda" BIGINT,
    "pe_ratio" DECIMAL(65,30),
    "peg_ratio" DECIMAL(65,30),
    "dividend_per_share" DECIMAL(65,30),
    "dividend_yield" DECIMAL(65,30),
    "eps" DECIMAL(65,30),
    "analyst_target_price" DECIMAL(65,30),
    "week_52_high" DECIMAL(65,30),
    "week_52_low" DECIMAL(65,30),
    "beta" DECIMAL(65,30),
    "dividend_date" TIMESTAMP(3),
    "ex_dividend_date" TIMESTAMP(3),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "symbol_overview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "symbol_overview" ADD CONSTRAINT "symbol_overview_symbol_id_fkey" FOREIGN KEY ("symbol_id") REFERENCES "symbol"("id") ON DELETE CASCADE ON UPDATE CASCADE;
