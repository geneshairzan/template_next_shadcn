import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin as supabase } from "@/lib/supabase/admin";

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
    // const url = `https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=${API_KEY}`;
    const url = `https://localhost:3000/assets/data/usdidr.json`;
    const raw = await (await fetch(url)).json();

    const rows = Object.entries(raw.Series).map(([timestamp, ohlc]) => ({
      market_id: "37c3b273-cdd0-4814-b155-3ff2e434f7c9",
      timestamp: new Date(timestamp),
      interval: "M1", // or whatever interval this data represents
      open: parseFloat(ohlc["1. open"]),
      high: parseFloat(ohlc["2. high"]),
      low: parseFloat(ohlc["3. low"]),
      close: parseFloat(ohlc["4. close"]),
      volume: null, // optional
      created_at: new Date(),
      updated_at: new Date(),
    }));

    // 3. Upsert into market_series
    const { error: seriesError } = await supabase.from("market_series").upsert(rows, {
      onConflict: "market_id,timestamp,interval",
    });

    if (seriesError) console.error(seriesError);

    return res.json({ success: true, imported: rows.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Symbol sync failed" });
  }
}

function mapAssetType(type?: string) {
  switch (type?.toLowerCase()) {
    case "etf":
      return "ETF";
    case "stock":
    default:
      return "STOCK";
  }
}
