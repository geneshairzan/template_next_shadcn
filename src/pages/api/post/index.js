import prisma from "@/lib/prisma";
import { createHandler } from "@/lib/apiHandler";

export default createHandler(async (r, res) => {
  if (r.method === "POST") {
    const data = await prisma.post.create({ data: r.body });
    return res.json(data);
  }

  const data = await prisma.post.findMany({
    where: { created_at: null },
  });
  res.json(data);
});
