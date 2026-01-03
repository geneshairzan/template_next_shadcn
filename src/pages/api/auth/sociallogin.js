import prisma from "@/lib/prisma";
import enc, { getSimpleToken } from "@lib/helper/encryption";

import axios from "axios";

export default async function handler(r, res) {
  if (r.method === "POST") {
    const oauth = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${r?.body.access_token}` },
    });

    if (oauth?.data) {
      const { password, ...user } = await prisma.user.upsert({
        where: { email: oauth?.data.email },
        create: { email: oauth?.data.email, name: oauth?.data.name, role_id: 2 },
        update: {},
      });
      return res.status(200).json({ ...user, token: await enc.getToken(user) });
    }
  }
  return res.status(401);
}
