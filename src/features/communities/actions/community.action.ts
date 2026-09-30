"use server"
import { requireAuth } from "@/src/lib/auth-server";
import { CommunitySchema } from "../schemas/communitySchema";
import { communityService } from "../services/CommunityService";
import { CommunityInput, CommunityPermissions } from "../types";


export async function createCommunityAction(input : CommunityInput) {

    const { session } = await requireAuth()

    if(!session) {
        return {
            error : 'Hubo un error',
            success : ''
        }
    }
    const data = CommunitySchema.safeParse(input)

    if(!data.success) {
        return {
            error : '',
            success : ''
        }
    }

    

    await communityService.createCommunity(data.data, session.user.id)

    return {
        error : '',
        success : 'Comunidad creada correctamente'
    }

}

export async function editCommunityAction(formData : CommunityInput, communityId : string) {
    const { session } = await requireAuth()

    if(!session) {
        return {
            error : 'Hubo un error',
            success : ''
        }
    }
    const data = CommunitySchema.safeParse(formData)
    if(!data.success) {
        return {
            error : '',
            success : ''
        }
    }

    await communityService.updateCommunity(communityId, data.data, session.user)

    return {
        error : '',
        success : 'Comunidad Actualizada Correctamente'
    }

}