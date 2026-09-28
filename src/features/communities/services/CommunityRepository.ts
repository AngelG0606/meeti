import { db } from "@/src/db"
import { CommunityInput } from "../types"
import { community } from "@/src/db/schema"
import { InsertCommunity, SelectCommunity } from "../schemas/communitySchema"


export interface ICommunityRepository {
    create : (data : CommunityInput, userId : string) => Promise<SelectCommunity>
}

export class CommunityRepository implements ICommunityRepository {
    async create(data: CommunityInput, userId : string) : Promise<SelectCommunity> {
        const communityValues : InsertCommunity = {
            name : data.name,
            description : data.description,
            createdBy : userId
        }
        const [result] = await db.insert(community).values(communityValues).returning()
        return result
    }
}

export const communityRepository = new CommunityRepository()