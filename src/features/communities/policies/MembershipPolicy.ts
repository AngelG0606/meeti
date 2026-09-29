import { User } from "better-auth";
import { SelectCommunity } from "../schemas/communitySchema";


export class MembershipPolicy {

    static canJoin(user :  User, community : SelectCommunity, isMember : boolean) : boolean {
        if(isMember) return false
        //El administrador no se puede unir
        if(community.createdBy === user.id) return false

        return true
    }

    static canLeave(user :  User, community : SelectCommunity, isMember : boolean) : boolean {
        //El administrador no se puede salir de su comunidad
        if(community.createdBy === user.id) return false
        return isMember
    }

}