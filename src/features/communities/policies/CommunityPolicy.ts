import { User } from "better-auth"
import { SelectCommunity } from "../schemas/communitySchema"


export class CommunityPolicy {

    static isAdmin(community : SelectCommunity, user : User) {
        return community.createdBy === user.id
    }

    static isMember(community : SelectCommunity, user : User) {
        return community.createdBy !== user.id
    }

    static canEdit(community : SelectCommunity, user : User) {
        return this.isAdmin(community, user)
    }

    static canDelete(community : SelectCommunity, user : User) {
        return this.isAdmin(community, user)
    }

    static canViewMembers(community : SelectCommunity, user : User) {
        return this.isAdmin(community, user)
    }
}