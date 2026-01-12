import { useState, useEffect } from "react";
import { fetcher } from "@lib/useFetch";
import { useDebounce } from "gh-lib";

export function useTable({ url, latency = 1000, perpage = 50 }) {
  const [table, settable] = useState({
    page: 1,
    q: "",
    perpage: perpage,
    data: [],
    by: "created_at",
    order: "asc",
    isLoading: false,
  });

  async function getData() {
    // settable((prev) => ({ ...prev, isLoading: true }));
    console.log("first");
    let res = await fetcher({
      url: url + `?perpage=${table?.perpage}&p=${table?.page}&q=${table?.q}&by=${table?.by}&order=${table?.order}`,
    });
    console.log(res);

    settable((p) => ({ ...p, ...res?.data, isLoading: false }));
  }

  useDebounce(
    () => {
      getData();
    },
    [table.page, table.q, table.perpage, table.by, table.order],
    latency
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
