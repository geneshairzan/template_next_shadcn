import React, { useState, useEffect } from "react";
import { fetcher } from "@lib/useFetch";
import Datatable, { useSupabase } from "@/components/ui/datatable";
import UI from "@ui";
import TeenantLayout from "@/components/layout/teenant";

export default function SymbolPage() {
  const table = useSupabase({
    url: "symbol",
    perpage: 100,
  });

  return (
    <TeenantLayout>
      <TopSection />
      <Datatable
        table={table}
        data={table.data}
        columns={[
          { key: "id", label: "ID", width: 60, type: "elipsis" },
          { key: "symbol", label: "Symbol", width: 80, type: "elipsis" },
          { key: "name", label: "Name", width: 300, type: "elipsis" },
          { key: "exchange", label: "Exchange", width: 220 },
          { key: "type", label: "Type", width: 400 },
          { key: "source", label: "Source", width: 400 },
          { key: "updated_at", label: "Last Update", width: 400, type: "date" },
        ]}
      />
      <UI.Col className="h-[5dvh] bg-blue-50 text-error">bottom</UI.Col>
    </TeenantLayout>
  );
}

function TopSection(params) {
  return <UI.Col className="h-[5dvh] bg-green-100">top</UI.Col>;
}
