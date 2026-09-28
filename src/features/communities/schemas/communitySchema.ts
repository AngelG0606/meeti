import { community } from '@/src/db/schema';
import {InferInsertModel, InferSelectModel } from 'drizzle-orm'
import z from "zod";

export const CommunitySchema = z.object({
  name: z.string()
          .min(3, {error: 'El Titulo de la Comunidad es Obligatorio'}),
  description: z.string()
          .min(10, {error: 'La Descripción es obligatoria'})
})

export type InsertCommunity = InferInsertModel<typeof community>
export type SelectCommunity = InferSelectModel<typeof community>
