import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("types").collect();
  },
});

export const input = query({
  args: {},
  handler: async (ctx) => {
    return (await ctx.db.query("types").collect()).map(({ _id, name }) => ({ id: _id, name }));
  },
});

export const post = mutation({
  args: { name: v.string(), model: v.string() },
  handler: async (ctx, args) => await ctx.db.insert("types", args),
});
