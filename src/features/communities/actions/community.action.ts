"use server"
import { requireAuth } from "@/src/lib/auth-server";
import { CommunitySchema } from "../schemas/communitySchema";
import { communityService } from "../services/CommunityService";
import { CommunityInput } from "../types";


export async function createCommunityAction(input : CommunityInput) {

    const data = CommunitySchema.safeParse(input)

    if(!data.success) {
        return {
            error : '',
            success : ''
        }
    }

    const { session, isAuth } = await requireAuth()

    if(!session) {
        return {
            error : 'Hubo un error',
            success : ''
        }
    }

    await communityService.createCommunity(data.data, session.user.id)

    return {
        error : '',
        success : 'Comunidad creada correctamente'
    }

}