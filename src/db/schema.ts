// The project's Drizzle schema — the source of truth for `npm run db:generate` (A3.5). Add the app's tables
// below. Event logs, telemetry and analytics streams do not belong in this database (A3.18).
export * from './schema.auth';

import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const contacts = sqliteTable(
  'contacts',
  {
    id: text().primaryKey(),
    name: text().notNull(),
    email: text().notNull(),
    message: text().notNull(),
    privacy_accepted: integer({ mode: 'boolean' }).notNull().default(false),
    created_at: integer({ mode: 'timestamp' }).notNull(),
  },
  (t) => [index('contacts_created_at_idx').on(t.created_at)],
);
