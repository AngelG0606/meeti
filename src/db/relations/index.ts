import { relations } from "drizzle-orm/_relations";
import { accounts, sessions, users } from "../schema/auth-schema";
import { community } from "../schema";

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
  community : many(community)
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const communityRelations = relations(community, ({one}) => ({
  user: one(users, {
    fields : [community.createdBy],
    references : [users.id]
  })
}))