"use server"

import { SignIn, SignInSchema, SignUp, SignUpSchema } from "../schemas/authSchema";
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

export async function signInAction(formData : SignIn) {
    const data = SignInSchema.safeParse(formData)

    if(!data.success) {
        return {
            error : 'Hubo un error al iniciar sesión',
            success : ''
        }
    }   

    const response = await authService.login(data.data)
    return response
}