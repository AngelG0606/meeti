import { User } from "../../auth/types/auth.types";
import { CommunityPolicy } from "../policies/CommunityPolicy";
import { MembershipPolicy } from "../policies/MembershipPolicy";
import { CommunityInput } from "../types";
import {
  communityRepository,
  ICommunityRepository,
} from "./CommunityRepository";

export class CommunityService {
  constructor(private communityRepository: ICommunityRepository) {}

  async createCommunity(input: CommunityInput, userId: string) {
    try {
      const community = await this.communityRepository.create(input, userId);

      if (community) {
        return {
          error: "",
          success: "Comunidad Creada Correctamente",
        };
      }
    } catch (error) {
    }
  }

  async getUserCommunities(user : User) {
    const communities = await this.communityRepository.findByUser(user.id)

    const enriched = await Promise.all(communities.map( async (community) => {
      const isMember = CommunityPolicy.isMember(community, user)
      const isAdmin = CommunityPolicy.isAdmin(community, user)
      return {
        data : community,
        context : {
          isMember,
          isAdmin
        },
        permissions : {
          canEdit : CommunityPolicy.canEdit(community, user),
          canDelete : CommunityPolicy.canDelete(community, user),
          canJoin : MembershipPolicy.canJoin(user, community, isMember),
          canLeave : MembershipPolicy.canLeave(user, community, isAdmin),
          canViewMembers : CommunityPolicy.canViewMembers(community, user)
        }
      }
    }))
    
    return enriched
  }
}

export const communityService = new CommunityService(communityRepository);
