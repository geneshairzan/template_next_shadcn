import prisma from "@/lib/prisma";
import enc, { getSimpleToken } from "@lib/helper/encryption";

export default async function handler(r, res) {
  if (r.method == "POST") {
    let { password, ...user } = await prisma.user.findFirst({
      where: { email: r.body.email, token: r.body.passcode },
    });

    if (user) {
      if (r.body.password) {
        await prisma.user.upsert({
          where: { email: r.body.email },
          create: { email: r.body.email, name: r.body.name, token: null, password: r.body.password },
          update: {},
        });
      }
      return res.status(200).json({ ...user, token: await enc.getToken(user) });
    }
    return res.status(400).json({ message: "err" });
  }
}
