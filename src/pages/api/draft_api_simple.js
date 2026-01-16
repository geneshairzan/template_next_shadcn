import prisma from "@/lib/prisma";
import { createHandler } from "@/lib/apiHandler";
import axios from "axios";

import dns from "dns/promises";

export async function verifyDomain({ sub, domain }) {
  return await dns.resolveTxt(`${sub}.${domain}`);
}

export default createHandler(async (r, res) => {
  return res.status(200).json(verifyDomain({ sub: "_smarti_verifier", domain: "smartitechnology.com" }));
});
