import prisma from "@/lib/prisma";
import { createHandler } from "@/lib/apiHandler";
import axios from "axios";
import { api } from "../../../../../convex/_generated/api";
import { mutation } from "../../../../../convex/_generated/server";
import { v } from "convex/values";

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
  mutation({
    args: { text: v.string() },
    handler: async (ctx, args) => {
      const taskId = await ctx.db.insert("tasks", { text: args.text });
      // do something with `taskId`
      return res.status(200).json(taskId);
    },
  });
}

async function handlePut(r, res) {
  return res.status(200).json("ok");
}

async function handleDelete(r, res) {
  return res.status(200).json("ok");
}

async function handleGet(r, res) {
  const page = parseInt(r?.query?.p) || 1;
  const pageSize = parseInt(r?.query?.perpage) || 100;
  const by = r?.query?.by || "created_at";
  const order = r?.query?.order || "desc";

  let orderBy = { [by]: order };

  if (by == "role") {
    orderBy = { role: { name: order } };
  }
  if (by == "type") {
    orderBy = { type: { name: order } };
  }

  let where = r?.query?.q
    ? {
        OR: [{ email: { contains: r.query.q } }, { name: { contains: r.query.q } }],
      }
    : {};
  let totalCount = await extendPrisma.User.count({
    where,
  });

  let data = await extendPrisma.User.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: orderBy, // Optional: sort items
    where,
    include: {
      type: {
        select: {
          id: true,
          name: true,
        },
      },
      role: {
        select: {
          id: true,
          name: true,
          color: true,
        },
      },
    },
  });

  return res.status(200).json({
    items: prisma.responseFilter([
      ...data
        .sort((a, b) => (new Date(a.created_at) < new Date(b.created_at) ? 1 : -1))
        .map(({ token, ...d }) => ({
          ...d,
          has_pwd: d.type_id != 1 ? true : false,
        })),
    ]),
    pagination: {
      total: totalCount,
      page,
      pageSize,
      totalPages: Math.ceil(totalCount / pageSize),
    },
  });

  return res.status(200).json(
    prisma.responseFilter([
      ...data
        .sort((a, b) => (new Date(a.created_at) < new Date(b.created_at) ? 1 : -1))
        .map(({ token, ...d }) => ({
          ...d,
          has_pwd: d?.password ? true : false,
        })),
    ]),
  );
}
