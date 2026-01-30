/*
  Warnings:

  - You are about to drop the column `description` on the `symbol_overview` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `symbol_overview` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[symbol_id,source,as_of_date]` on the table `symbol_overview` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `source` to the `symbol_overview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "symbol_overview" DROP COLUMN "description",
DROP COLUMN "updated_at",
ADD COLUMN     "analyst_rating_buy" INTEGER,
ADD COLUMN     "analyst_rating_hold" INTEGER,
ADD COLUMN     "analyst_rating_sell" INTEGER,
ADD COLUMN     "analyst_rating_strong_buy" INTEGER,
ADD COLUMN     "analyst_rating_strong_sell" INTEGER,
ADD COLUMN     "as_of_date" TIMESTAMP(3),
ADD COLUMN     "book_value" DECIMAL(65,30),
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currency" TEXT,
ADD COLUMN     "day_200_moving_average" DECIMAL(65,30),
ADD COLUMN     "day_50_moving_average" DECIMAL(65,30),
ADD COLUMN     "diluted_eps_ttm" DECIMAL(65,30),
ADD COLUMN     "ev_to_ebitda" DECIMAL(65,30),
ADD COLUMN     "ev_to_revenue" DECIMAL(65,30),
ADD COLUMN     "fiscal_year_end" TEXT,
ADD COLUMN     "forward_pe" DECIMAL(65,30),
ADD COLUMN     "gross_profit_ttm" BIGINT,
ADD COLUMN     "latest_quarter" DATE,
ADD COLUMN     "operating_margin_ttm" DECIMAL(65,30),
ADD COLUMN     "percent_insiders" DECIMAL(65,30),
ADD COLUMN     "percent_institutions" DECIMAL(65,30),
ADD COLUMN     "price_to_book_ratio" DECIMAL(65,30),
ADD COLUMN     "price_to_sales_ratio_ttm" DECIMAL(65,30),
ADD COLUMN     "profit_margin" DECIMAL(65,30),
ADD COLUMN     "quarterly_earnings_growth_yoy" DECIMAL(65,30),
ADD COLUMN     "quarterly_revenue_growth_yoy" DECIMAL(65,30),
ADD COLUMN     "return_on_assets_ttm" DECIMAL(65,30),
ADD COLUMN     "return_on_equity_ttm" DECIMAL(65,30),
ADD COLUMN     "revenue_per_share_ttm" DECIMAL(65,30),
ADD COLUMN     "revenue_ttm" BIGINT,
ADD COLUMN     "shares_float" BIGINT,
ADD COLUMN     "shares_outstanding" BIGINT,
ADD COLUMN     "source" TEXT NOT NULL,
ADD COLUMN     "trailing_pe" DECIMAL(65,30);

-- CreateIndex
CREATE INDEX "symbol_overview_symbol_id_idx" ON "symbol_overview"("symbol_id");

-- CreateIndex
CREATE INDEX "symbol_overview_as_of_date_idx" ON "symbol_overview"("as_of_date");

-- CreateIndex
CREATE UNIQUE INDEX "symbol_overview_symbol_id_source_as_of_date_key" ON "symbol_overview"("symbol_id", "source", "as_of_date");
