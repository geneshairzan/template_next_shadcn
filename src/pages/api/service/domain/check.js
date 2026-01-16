import { createHandler } from "@/lib/apiHandler";
import { server } from "gh-lib/node";

export default createHandler(async (r, res) => {
  return res.status(200).json(await server.verifyDomainCloudflare({ sub: "_smarti_verifier", domain: "smartitechnology.com" }));
});
