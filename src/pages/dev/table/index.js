import React, { useState, useEffect } from "react";
import { fetcher } from "@lib/useFetch";
import Datatable, { useTable } from "@/components/ui/datatable";
import UI from "@ui";
import TeenantLayout from "@/components/layout/teenant";

export default function Page() {
  const table = useTable({
    url: "sample/product",
    perpage: 100,
  });

  return (
    <TeenantLayout>
      <TopSection />
      <Datatable
        table={table}
        data={table.data?.map((d) => ({ ...d.data, name: d.data.title }))}
        columns={[
          { key: "id", label: "ID", width: 60 },
          { key: "name", label: "Title", width: 300 },
          { key: "price", label: "Price", width: 220 },
          { key: "category", label: "Category", width: 400 },
          { key: "thumbnail", label: "TB", width: 600, type: "elipsis" },
          { key: "description", label: "Desc", width: 400, type: "elipsis" },
        ]}
      />
      <UI.Col className="h-[20dvh] bg-blue-50 text-error">bottom</UI.Col>
    </TeenantLayout>
  );
}

function TopSection(params) {
  return <UI.Col className="h-[20dvh] bg-green-100">top</UI.Col>;
}
