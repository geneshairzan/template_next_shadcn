import type { NextApiRequest, NextApiResponse } from "next";
import prisma, { manyUpsert } from "@/lib/prisma";
import { jsonSafe } from "@/lib/apiHandler";

const API_KEY = process.env.ALPHAVANTAGE_API_KEY!;
// const CRON_SECRET = process.env.CRON_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    // return res.status(405).json({ error: "Method not allowed" });
  }

  // if (req.headers["x-cron-secret"] !== CRON_SECRET) {
  //   return res.status(401).json({ error: "Unauthorized" });
  // }

  try {
    const input = "IBM";
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${input}&apikey=${API_KEY}`;
    const raw = await (await fetch(url)).json();
    const forPrisma = mapAlphaOverviewToSymbolOverview(raw);
    const symbol = await prisma.symbol.findUnique({
      where: {
        symbol_type: {
          symbol: input,
          type: "STOCK",
        },
      },
    });
    const newdata = await prisma.symbol_overview.upsert({
      where: {
        symbol_id_source_as_of_date: {
          symbol_id: symbol.id,
          source: forPrisma.source,
          as_of_date: forPrisma.as_of_date,
        },
      },
      create: {
        ...forPrisma,
        symbol_id: symbol.id,
      },
      update: {
        ...forPrisma,
      },
    });

    return res.json(jsonSafe(newdata));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Symbol sync failed" });
  }
}

const toNumber = (v) => (v == null || v === "" || v === "None" ? null : Number(v));
const toBigInt = (v) => (v == null || v === "" || v === "None" ? null : v.toString());
const toDate = (v) => (v == null || v === "" || v === "None" ? null : new Date(v));

const mapAlphaOverviewToSymbolOverview = (raw) => ({
  asset_type: "STOCK",

  cik: raw.CIK ?? null,
  currency: raw.Currency ?? null,
  country: raw.Country ?? null,
  sector: raw.Sector ?? null,
  industry: raw.Industry ?? null,
  address: raw.Address ?? null,

  official_site: raw.OfficialSite ?? null,
  fiscal_year_end: raw.FiscalYearEnd ?? null,

  latest_quarter: toDate(raw.LatestQuarter),

  market_capitalization: toBigInt(raw.MarketCapitalization),
  ebitda: toBigInt(raw.EBITDA),

  pe_ratio: toNumber(raw.PERatio),
  peg_ratio: toNumber(raw.PEGRatio),
  trailing_pe: toNumber(raw.TrailingPE),
  forward_pe: toNumber(raw.ForwardPE),

  price_to_sales_ratio_ttm: toNumber(raw.PriceToSalesRatioTTM),
  price_to_book_ratio: toNumber(raw.PriceToBookRatio),
  ev_to_revenue: toNumber(raw.EVToRevenue),
  ev_to_ebitda: toNumber(raw.EVToEBITDA),

  book_value: toNumber(raw.BookValue),
  beta: toNumber(raw.Beta),

  eps: toNumber(raw.EPS),
  diluted_eps_ttm: toNumber(raw.DilutedEPSTTM),
  revenue_per_share_ttm: toNumber(raw.RevenuePerShareTTM),

  revenue_ttm: toBigInt(raw.RevenueTTM),
  gross_profit_ttm: toBigInt(raw.GrossProfitTTM),

  profit_margin: toNumber(raw.ProfitMargin),
  operating_margin_ttm: toNumber(raw.OperatingMarginTTM),
  return_on_assets_ttm: toNumber(raw.ReturnOnAssetsTTM),
  return_on_equity_ttm: toNumber(raw.ReturnOnEquityTTM),

  quarterly_earnings_growth_yoy: toNumber(raw.QuarterlyEarningsGrowthYOY),
  quarterly_revenue_growth_yoy: toNumber(raw.QuarterlyRevenueGrowthYOY),

  dividend_per_share: toNumber(raw.DividendPerShare),
  dividend_yield: toNumber(raw.DividendYield),
  dividend_date: toDate(raw.DividendDate),
  ex_dividend_date: toDate(raw.ExDividendDate),

  analyst_target_price: toNumber(raw.AnalystTargetPrice),
  analyst_rating_strong_buy: toNumber(raw.AnalystRatingStrongBuy),
  analyst_rating_buy: toNumber(raw.AnalystRatingBuy),
  analyst_rating_hold: toNumber(raw.AnalystRatingHold),
  analyst_rating_sell: toNumber(raw.AnalystRatingSell),
  analyst_rating_strong_sell: toNumber(raw.AnalystRatingStrongSell),

  week_52_high: toNumber(raw["52WeekHigh"]),
  week_52_low: toNumber(raw["52WeekLow"]),

  day_50_moving_average: toNumber(raw["50DayMovingAverage"]),
  day_200_moving_average: toNumber(raw["200DayMovingAverage"]),

  shares_outstanding: toBigInt(raw.SharesOutstanding),
  shares_float: toBigInt(raw.SharesFloat),

  percent_insiders: toNumber(raw.PercentInsiders),
  percent_institutions: toNumber(raw.PercentInstitutions),

  source: "alpha_vantage",
  as_of_date: raw.LatestQuarter ? new Date(raw.LatestQuarter) : new Date(),
});
