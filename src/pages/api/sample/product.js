import prisma from "@/lib/prisma";
import { createHandler } from "@/lib/apiHandler";
import axios from "axios";

export default createHandler(async (r, res) => {
  switch (r.method) {
    case "GET":
      return handleGet(r, res);
    case "POST":
      return handlePost(r, res);
    case "PUT":
      return handlePut(r, res);
    case "DELETE":
      return handleDelete(r, res);
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      return res.status(405).json({ error: "Method Not Allowed" });
  }
});

async function handlePost(r, res) {
  return res.status(200).json("ok");
}

async function handlePut(r, res) {
  return res.status(200).json("ok");
}

async function handleDelete(r, res) {
  return res.status(200).json("ok");
}

async function handleGet(r, res) {
  const page = parseInt(r?.query?.p) || 1;
  const perpage = parseInt(r?.query?.perpage) || 100;
  const by = r?.query?.by || "created_at";
  const order = r?.query?.order || "desc";

  let orderBy = { [by]: order };

  let where = r?.query?.q
    ? {
        OR: [{ name: { contains: r.query.q, mode: "insensitive" } }],
      }
    : {};
  let totalCount = await prisma.sample.count({
    where,
  });

  let data = await prisma.sample.findMany({
    skip: (page - 1) * perpage,
    take: perpage,
    orderBy: orderBy, // Optional: sort items
    where,
  });

  return res.status(200).json({
    data: data,
    total: totalCount,
    page,
    perpage,
    totalPages: Math.ceil(totalCount / perpage),
  });
}
