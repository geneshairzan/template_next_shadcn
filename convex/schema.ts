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
});
