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
    } catch (error) {}
  }
}

export const communityService = new CommunityService(communityRepository);
