import prisma from "@/lib/prisma";
import { createHandler } from "@/lib/apiHandler";
import axios from "axios";
import { supabaseAdmin as supabase } from "@/lib/supabase/admin";

export default createHandler(async (r, res) => {
  const { data, error } = await supabase.from("symbol").select("*").eq("symbol", "USD").eq("type", "FOREX");

  if (error) return res.status(200).json(error);
  return res.status(200).json(data);
});
