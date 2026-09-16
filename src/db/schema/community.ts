import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const community = pgTable("communities", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
});
