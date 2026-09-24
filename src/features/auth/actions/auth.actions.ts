"use server"

import { ForgotPassword, ForgotPasswordSchema, NewPasswordInput, NewPassworSchema, SignIn, SignInSchema, SignUp, SignUpSchema } from "../schemas/authSchema";
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

export async function forgotPasswordRequestAction(input : ForgotPassword) {
    const data = ForgotPasswordSchema.safeParse(input)

    if(!data.success) {
        return {
            error : 'Hubo un error',
            success : ''
        }
    }

    const response = await authService.requestPasswordReset(data.data)
    return response
    
}

export async function setNewPasswordAction(formData : NewPasswordInput, token : string) {
    const data = NewPassworSchema.safeParse(formData)

    if(!data.success) {
        return {
            error : 'Hubo un error al intentar cambiar tu contraseña',
            success : ''
        }
    }
    const response  = await authService.confirmPasswordReset(data.data, token)
    return response
}