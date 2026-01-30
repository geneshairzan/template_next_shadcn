import prisma from "./index";
import { getTableColumns } from "./getTableColumns";

export async function manyUpsert({ table, rows, conflictColumns, autoUpdatedAt = true, schemaDriven = false }) {
  if (!rows || rows.length === 0) return;

  const conflictCols = conflictColumns.split(",").map((c) => c.trim());

  const escape = (v) => {
    if (v === null || v === undefined) return "NULL";
    if (v instanceof Date) return `'${v.toISOString()}'`;
    if (typeof v === "boolean") return v ? "true" : "false";
    if (typeof v === "number") return v.toString();
    return `'${String(v).replace(/'/g, "''")}'`;
  };

  // 🔹 choose column source
  let columns;
  if (schemaDriven) {
    const tableCols = await getTableColumns(table);
    columns = tableCols.filter((c) => c in rows[0]);
  } else {
    columns = Object.keys(rows[0]);
  }

  // 🔹 ensure updated_at is inserted
  if (autoUpdatedAt && !columns.includes("updated_at")) {
    columns.push("updated_at");
  }

  const updateColumns = columns.filter((c) => !conflictCols.includes(c) && c !== "updated_at");

  const valuesSql = rows.map((row) => `(${columns.map((c) => (c === "updated_at" && autoUpdatedAt ? "NOW()" : escape(row[c]))).join(",")})`).join(",");

  const updatesSql = updateColumns
    .map((c) => `"${c}" = EXCLUDED."${c}"`)
    .concat(autoUpdatedAt ? [`"updated_at" = NOW()`] : [])
    .join(",");

  const sql = `
    INSERT INTO "${table}" (${columns.map((c) => `"${c}"`).join(",")})
    VALUES ${valuesSql}
    ON CONFLICT (${conflictCols.map((c) => `"${c}"`).join(",")})
    DO UPDATE SET ${updatesSql};
  `;

  await prisma.$executeRawUnsafe(sql);
}

export async function manyUpsertv2({ table, rows, columns, conflictColumns, updateColumns, extraSqlColumns = [], extraSqlValues = [] }) {
  if (!rows || rows.length === 0) return;

  const escape = (v) => {
    if (v === null || v === undefined) return "NULL";
    if (v instanceof Date) return `'${v.toISOString()}'`;
    if (typeof v === "boolean") return v ? "true" : "false";
    if (typeof v === "number") return v.toString();
    return `'${String(v).replace(/'/g, "''")}'`;
  };

  const allColumns = [...columns, ...extraSqlColumns];

  const values = rows.map((row) => `(${[...columns.map((c) => escape(row[c])), ...extraSqlValues].join(",")})`).join(",");

  const updates = [...updateColumns.map((c) => `"${c}" = EXCLUDED."${c}"`), ...extraSqlColumns.map((c) => `"${c}" = NOW()`)].join(",");

  const sql = `
    INSERT INTO "${table}" (${allColumns.map((c) => `"${c}"`).join(",")})
    VALUES ${values}
    ON CONFLICT (${conflictColumns.map((c) => `"${c}"`).join(",")})
    DO UPDATE SET ${updates};
  `;

  await prisma.$executeRawUnsafe(sql);
}
