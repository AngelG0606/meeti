import { z } from 'zod'

export const AuthSchema = z.object({
    name : z.string().trim().min(1, "El Nombre es Obligatorio"),
    email : z.string().trim().email("No es un Email válido"),
    password : z.string().trim().min(8, "Minimo 8 Caracteres"),
    password_confirmation : z.string().trim().min(1, "No puede ir vacío"),
    new_password : z.string().trim().min(8, "Minimo 8 Caracteres")
})

export const SignUpSchema = AuthSchema.pick({
    name : true,
    email : true,
    password : true,
    password_confirmation : true
}).refine( (data) => data.password === data.password_confirmation, {
    error : "Las Contraseñas no coinciden",
    path : ["password_confirmation"]
})

export const SignInSchema = AuthSchema.pick({
    email : true
}).extend({
    password : z.string().trim().min(1, "No puede ir vacío")
})

export const ForgotPasswordSchema = AuthSchema.pick({
    email : true
})

export const NewPassworSchema = AuthSchema.pick({
    new_password : true,
    password_confirmation : true
}).refine( (data) => data.new_password === data.password_confirmation, {
    error : "Las Contraseñas no coinciden",
    path : ["password_confirmation"]
})

export type SignUp = z.infer<typeof SignUpSchema>
export type SignIn = z.infer<typeof SignInSchema>

export type ForgotPassword = z.infer<typeof ForgotPasswordSchema>
export type NewPasswordInput = z.infer<typeof NewPassworSchema>