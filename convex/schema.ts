import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
  types: defineTable({
    model: v.string(),
    name: v.string(),
    desc: v.optional(v.string()),
  }),
  products: defineTable({
    name: v.string(),
    type_id: v.optional(v.id("types")),
  }),

  symbols: defineTable({
    symbol: v.string(), // AAPL, EURUSD, XAUUSD
    name: v.string(), // Apple Inc
    description: v.optional(v.string()),

    type: v.union(v.literal("stock"), v.literal("forex"), v.literal("commodity"), v.literal("crypto")),

    exchange: v.optional(v.string()), // NASDAQ, NYSE
    currency: v.optional(v.string()), // USD

    source: v.string(), // alpha_vantage, yahoo
    active: v.boolean(),

    updatedAt: v.number(),
  })
    .index("by_symbol", ["symbol"])
    .index("by_type", ["type"]),
});
