import prisma from "@/lib/prisma";
import { createHandler } from "@/lib/apiHandler";
import axios from "axios";

import dns from "dns/promises";
import Firecrawl from "@mendable/firecrawl-js";

export default createHandler(async (r, res) => {
  const app = new Firecrawl({ apiKey: "fc-64f2a9051ff84c75b10f424154861b8a" });
  const data = await app.scrape("firecrawl.dev");
  return res.status(200).json(data);
});
