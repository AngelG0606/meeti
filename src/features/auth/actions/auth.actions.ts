"use server"

import { SignUp, SignUpSchema } from "../schemas/authSchema";
import { authService } from "../services/AuthService";

export async function signUpAction(formData : SignUp) {
    const data = SignUpSchema.safeParse(formData)

    if(!data.success) {
        return {
            error : 'Hubo un error al crear tu cuenta',
            success : ''
        }
    }

    const response = await authService.register(data.data)
    return response
} 