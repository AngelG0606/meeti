import z from "zod";
import { CommunitySchema, SelectCommunity } from "../schemas/communitySchema";

export type CommunityInput = z.infer<typeof CommunitySchema>

export type CommunityPermissions = {
    canEdit : boolean
    canDelete : boolean
    canJoin : boolean
    canLeave : boolean
    canViewMembers : boolean
}

export type CommunityContext = {
    isAdmin : boolean
    isMember : boolean
}

export type CommunityWithPermissions = {
    data : SelectCommunity
    context : CommunityContext
    permissions : CommunityPermissions
}