// import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

import { Pool } from 'pg';

const db = drizzle(new Pool({ connectionString: process.env.POSTGRES_URL }),  { schema, logger: true });

export default db;

export type DrizzleClient = typeof db;
