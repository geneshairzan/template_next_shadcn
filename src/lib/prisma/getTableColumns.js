import prisma from "@/lib/prisma";

export async function getTableColumns(table) {
  const rows = await prisma.$queryRawUnsafe(`
    SELECT column_name
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = '${table}'
    ORDER BY ordinal_position;
  `);

  return rows.map((r) => r.column_name);
}
