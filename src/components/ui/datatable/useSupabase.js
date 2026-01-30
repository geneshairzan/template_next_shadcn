import { useState, useEffect } from "react";
import { fetcher } from "@lib/useFetch";
import { useDebounce } from "gh-lib";
import { supabase } from "@/lib/supabase/client";

export function useSupabase({ url, latency = 1000, perpage = 50 }) {
  const [table, settable] = useState({
    page: 1,
    q: "", // search query
    perpage: perpage,
    data: [],
    by: "created_at",
    order: "asc",
    isLoading: false,
  });

  async function getData() {
    const from = (table.page - 1) * table.perpage;
    const to = from + table.perpage - 1;
    const { data, error } = await supabase.from("symbol").select("*").order("created_at", { ascending: false }).range(from, to);
    settable((p) => ({ ...p, data: data, isLoading: false }));
  }

  useDebounce(
    () => {
      getData();
    },
    [table.page, table.q, table.perpage, table.by, table.order],
    latency,
  );

  useEffect(() => {
    settable((p) => ({ ...p, page: 1 }));
  }, [table.q]);

  function handleSort(col) {
    settable((prev) => ({ ...prev, by: col, order: prev.order === "asc" && prev.by == col ? "desc" : "asc" }));
  }

  return {
    ...table,
    setQ: (input) => settable({ ...table, q: input, isLoading: true }),
    setPage: (input) => settable({ ...table, page: input, isLoading: true }),
    setSort: handleSort,
  };
}
