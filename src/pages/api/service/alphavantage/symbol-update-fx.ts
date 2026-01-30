import type { NextApiRequest, NextApiResponse } from "next";
import prisma, { manyUpsert } from "@/lib/prisma";

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
    const url = `https://localhost:3000/assets/data/physical_currency_list.csv`;
    const csv = await fetch(url).then((r) => r.text());

    const lines = csv.split("\n").slice(1);

    const rows = [];

    for (const line of lines) {
      if (!line.trim()) continue;
      const cols = line.split(",").map((v) => v.trim());
      const [symbol, name] = cols;

      rows.push({
        symbol,
        name,
        type: "FOREX",
        source: "alpha_vantage",
        active: true,
        updated_at: new Date(),
      });
    }

    await manyUpsert({
      table: "symbol",
      rows,
      conflictColumns: "symbol,type",
    });

    res.json({ success: true, imported: rows.length, data: rows.length });
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
