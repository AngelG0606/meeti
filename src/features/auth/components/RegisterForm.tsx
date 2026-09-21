"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignUp, SignUpSchema } from "../schemas/authSchema"
import FormError from "@/src/shared/components/forms/FormError"
import { signUpAction } from "../actions/auth.actions"
import toast from "react-hot-toast"


export default function RegisterForm() {

    const { register, handleSubmit, formState : { errors }, reset} = useForm({
        resolver : zodResolver(SignUpSchema),
        mode : 'all'
    })

    const onSubmit = async (formData : SignUp) => {
        const {success, error } = await signUpAction(formData)
        if(error) {
            toast.error(error)
        }

        if(success) {
            toast.success(success)
            reset()
        }

    }

    return (
        <>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <FormLabel htmlFor="name">Nombre Completo</FormLabel>
                <FormInput
                    type="text"
                    id="name"
                    placeholder="Juan Pérez"
                    {...register('name')}
                />
                {errors.name && (
                    <FormError>{errors.name.message}</FormError>
                )}


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

                <FormLabel htmlFor="password_confirm">Repetir Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="password_confirm"
                    placeholder="Repetir tu contraseña"
                    {...register('password_confirmation')}
                />
                {errors.password_confirmation && (
                    <FormError>{errors.password_confirmation.message}</FormError>
                )}

                <FormSubmit
                    value="Registrarme"
                />
            </Form>
        </>
    )
}
