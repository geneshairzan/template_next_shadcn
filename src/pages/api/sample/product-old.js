import prisma from "@/lib/prisma";
import { createHandler } from "@/lib/apiHandler";
import axios from "axios";

export default createHandler(async (r, res) => {
  if (r.method === "POST") {
    const data = await prisma.post.create({ data: r.body });
    return res.json(data);
  }

  if (0) {
    const res = await axios.get("https://dummyjson.com/products");
    const products = res.data.products;
    for (const p of products) {
      await prisma.sample.upsert({
        where: { id: p.id },
        update: {
          name: p.title,
          type: "product",
          data: p,
        },
        create: {
          name: p.title,
          type: "product",
          data: p,
        },
      });
    }
  }

  const data = await prisma.sample.findMany({
    where: {
      type: "product",
    },
    select: {
      id: true,
      name: true,
      data: true,
    },
  });
  return res.json(data);
});
