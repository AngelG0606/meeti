import z from "zod";
import { CommunitySchema } from "../schemas/communitySchema";

export type CommunityInput = z.infer<typeof CommunitySchema>

