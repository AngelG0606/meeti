"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignIn, SignInSchema } from "../schemas/authSchema"
import FormError from "@/src/shared/components/forms/FormError"
import { signInAction } from "../actions/auth.actions"
import toast from "react-hot-toast"




export default function LoginForm() {

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver : zodResolver(SignInSchema),
        mode : 'all'
    })

    const onSubmit = async (formData : SignIn) => {
        const {error, success} = await signInAction(formData)

        if(error) {
            toast.error(error)
        }

        if(success) {
            toast.success(success)
        }
    }

  return (
    <>
        <Form 
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput 
                type="email"
                id="email"
                placeholder="correo@correo.com"
                {...register('email')}
            />
            {errors.email && (
                <FormError>{errors.email.message}</FormError>
            )}

            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput 
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                {...register('password')}
            />
            {errors.password && (
                <FormError>{errors.password.message}</FormError>
            )}

            <FormSubmit 
                value="Iniciar Sesión"
            />
        </Form>
    </>
  )
}
