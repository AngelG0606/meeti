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

    await authService.register(data.data)

    return {
        error : '',
        success : 'Cuenta Creada Correctamente, revisa tu email para confirmar tu cuenta'
    }
} 