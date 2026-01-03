import prisma from "@/lib/prisma";
import enc, { getSimpleToken } from "@lib/helper/encryption";
export default async function handler(r, res) {
  if (r.method == "POST") {
    let user = await prisma.user.findUnique({
      where: { email: r.body.email },
    });

    if (user) {
      await prisma.user.upsert({
        where: { email: r.body.email },
        create: { token: getSimpleToken() },
        update: {},
      });
      return res.status(200).json({ message: "recode" });
    }

    return res.status(400).json({ message: "err" });
  }
}
