import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { defineRelations } from 'drizzle-orm';
import * as schema from './schema/index';

export const db = drizzle(process.env.DATABASE_URL!, {
    relations: defineRelations(schema)
});

