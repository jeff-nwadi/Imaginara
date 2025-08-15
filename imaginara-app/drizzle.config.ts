import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env" });

export default defineConfig({
  schema: "./db/Schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
