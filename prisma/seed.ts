import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
const bcrypt = require("bcrypt");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  await prisma.role.createMany({
    data: [
      { name: "admin", id: 1 },
      { name: "user", id: 2 },
    ],
    skipDuplicates: true,
  });
  await prisma.status.createMany({
    data: [...["active", "inactive"].map((d) => ({ name: d }))],
    skipDuplicates: true,
  });

  await prisma.user.create({
    data: {
      email: "admin@admin.com",
      name: "admin",
      password: await bcrypt.hash("password", 5),
      role_id: 1,
    },
  });

  await prisma.user.create({
    data: {
      email: "user@user.com",
      name: "user",
      password: await bcrypt.hash("password", 5),
      role_id: 1,
    },
  });
}

main();
