import React, { useState } from "react";

import UI from "@ui";
import Form from "@form";
import Renderer from "./renderer";
import Pagination from "./pagination";
import { useDebounce } from "gh-lib";

export { useTable } from "./useTable";

const defaultStyle = {
  rowHeight: 36,
  minCellWidth: 200,
  bgcolor: "bg-card",
  bgcolorHeader: "bg-primary",
  bgcolorEven: "bg-[#e0edff]",
  bgcolorOdd: "bg-card",
};

export default function RenderTable({ data, columns, style = defaultStyle, table }) {
  return (
    <UI.Col className={`flex-1 overflow-auto max-w-full gap-4`}>
      <Search table={table} />
      <UI.Col className="flex-1 overflow-auto">
        <UI.Col className={`flex-1 min-w-full w-max ${style.bgcolor}`}>
          <RenderHeader columns={columns} style={style} table={table} />
          <RenderRows data={data} columns={columns} style={style} />
          {data?.length == 0 && (
            <UI.Text variant="small" color="grey" className="py-2 pl-[50vw]">
              no data
            </UI.Text>
          )}
        </UI.Col>
      </UI.Col>
      <UI.Row>
        <Pagination page={table.page} totalPages={table.totalPages} onChange={(p) => table.setPage(p)} />
      </UI.Row>
    </UI.Col>
  );
}

function Search({ table }) {
  const [search, setsearch] = useState("");
  useDebounce(
    () => {
      table.setQ(search);
    },
    [search],
    500
  );
  return (
    <UI.Row>
      <Form.Text
        value={search}
        onChange={setsearch}
        className="w-60"
        placeholder="Search"
        suffix={search && <UI.Icon onClick={(e) => setsearch("")} color="error" name="close" />}
      />
    </UI.Row>
  );
}

function RenderHeader({ columns, style, table }) {
  function getSortIcon(col) {
    return table.by === col.key ? "north" : "unfold_more";
  }

  return (
    <div className={`sticky top-0 z-40 flex ${style.bgcolorHeader}`} style={{ height: style.rowHeight }}>
      {/* action column */}
      <div className="sticky left-0 z-50 w-10 bg-primary" />

      {columns.map((col, idx) => (
        <UI.Row
          key={col.key}
          spaced
          className={`flex items-center px-2 sticky ${idx === 0 ? "left-10 z-5 bg-primary" : ""}`}
          onClick={() => table.setSort(col.key)}
          style={{
            width: col.width ?? style.minCellWidth,
            minWidth: style.minCellWidth,
            height: style.rowHeight,
          }}
        >
          <UI.Text variant="body" color="#fff">
            {col.label}
          </UI.Text>
          <UI.Icon name={getSortIcon(col)} className={table.order === "asc" ? "rotate-180" : ""} color="#fff" size={16} />
        </UI.Row>
      ))}
    </div>
  );
}

function RenderRows({ data, columns, style }) {
  return data.map((row, i) => (
    <UI.Row key={i} className={`flex ${i % 2 === 0 ? style.bgcolorEven : style.bgcolorOdd}`} style={{ height: style.rowHeight }}>
      {/* action column */}
      <UI.Col center className={`sticky left-0 w-10 z-5 ${i % 2 === 0 ? style.bgcolorEven : style.bgcolorOdd}`}>
        <UI.Col className="border border-[#555555] w-5 h-5 rounded-[4px]" center>
          <UI.Icon name="more_vert" color="#555555" size={16} className="hover:cursor-pointer" />
        </UI.Col>
      </UI.Col>

      {columns.map((col, idx) => (
        <UI.Col
          key={col.key}
          className={`flex justify-center px-2 overflow-hidden sticky ${idx === 0 ? "left-10 z-5 bg-inherit" : "z-1"}`}
          style={{
            width: col.width,
            maxWidth: col.width,
            minWidth: style.minCellWidth,
            height: style.rowHeight,
          }}
        >
          <Renderer row={row} col={col} style={style} />
        </UI.Col>
      ))}
    </UI.Row>
  ));
}
