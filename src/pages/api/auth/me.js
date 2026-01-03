import prisma from "@/lib/prisma";
import enc, { getSimpleToken } from "@lib/helper/encryption";

export default async function handler(r, res) {
  if (r.method === "POST") {
    let token = r.headers?.authorization.split(" ")[1];

    try {
      let decode = await enc.checkToken(token);

      if (decode.role_id == 2) {
        // validate SID
        let user = await prisma.user.findFirst({
          where: { id: decode?.id, sid: decode.sid },
        });
        if (!user) {
          return res.status(401).json("un autorized");
        }
        return res.status(200).json({ ...user, token: await enc.getToken(user) });
      }
      let user = await prisma.user.findFirst({
        where: { id: decode?.id },
      });
      return res.status(200).json({ ...user, token: await enc.getToken(user) });
    } catch (error) {
      return res.status(401).json("un autorized");
    }
  }
}
