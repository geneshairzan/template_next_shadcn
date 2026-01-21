import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();
    return Promise.all(
      products.map(async (p) => ({
        ...p,
        type: await ctx.db.get(p.type_id),
      })),
    );
  },
});

export const post = mutation({
  args: { name: v.string(), type_id: v.string() },
  handler: async (ctx, args) => await ctx.db.insert("products", args),
});
