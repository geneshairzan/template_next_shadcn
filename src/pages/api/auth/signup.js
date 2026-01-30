import prisma from "@/lib/prisma";
import enc, { getSimpleToken } from "@lib/helper/encryption";

import { render } from "@react-email/render";
import EmailTemplate from "@/components/email/template/main";
import { sendEmail } from "@/components/email/mailer-node";

export default async function handler(r, res) {
  if (r.method == "POST") {
    let user = await prisma.user.findUnique({
      where: { email: r.body.email },
    });

    if (user) {
      // return res.status(400).json({ message: "err" });
    }

    let passcode = getSimpleToken();

    await prisma.user.upsert({
      where: { email: r.body.email },
      create: { email: r.body.email, name: r.body.name, token: passcode, role_id: 2 },
      update: {},
    });

    await sendEmail({
      to: r.body.email,
      subject: `Welcome to ${process.env.APP_NAME}`,
      html: await render(
        EmailTemplate({
          msg: "In order to verified your email address,\n please enter code below in Application.\n",
          code: passcode,
        }),
      ),
    });

    return res.status(200).json({ message: "User successfully registered", next: "passcode" });
  }
}
