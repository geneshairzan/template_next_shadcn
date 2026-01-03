import prisma from "@/lib/prisma";
import enc, { getSimpleToken } from "@lib/helper/encryption";
import { createHandler } from "@/lib/apiHandler";

export default createHandler(async (r, res) => {
  if (r.method === "POST") {
    let { password, ...user } = await prisma.user.findFirst({
      where: { email: r.body.email },
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    if (user && (await enc.check(r.body.password, password))) {
      return res.status(200).json({ ...user, token: await enc.getToken(user) });
    }
  }
  return res.status(401).json("un autorized");
});
