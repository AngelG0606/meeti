"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewPasswordInput, NewPassworSchema } from "../schemas/authSchema";
import FormError from "@/src/shared/components/forms/FormError";
import { redirect, useSearchParams } from "next/navigation";
import { setNewPasswordAction } from "../actions/auth.actions";
import toast from "react-hot-toast";

export default function SetPasswordForm() {

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    if (!token) redirect('/auth/forgot-password')


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(NewPassworSchema),
        mode: 'all'
    })

    const onSubmit = async (formData : NewPasswordInput) => {
        const { error, success } = await setNewPasswordAction(formData, token)

        if(error) toast.error(error)

        if(success) {
            toast.success(success)
            redirect('/auth/login')
        }

    }

    return (
        <>
            <Form
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormLabel>Nueva Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    {...register('new_password')}
                    placeholder="Ingresa tu nueva contraseña"
                />

                {errors.new_password && (
                    <FormError>{errors.new_password.message}</FormError>
                )}

                <FormLabel>Repetir Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="password_confirmation"
                    {...register('password_confirmation')}
                    placeholder="Repetir tu nueva contraseña"
                />

                {errors.password_confirmation && (
                    <FormError>{errors.password_confirmation.message}</FormError>
                )}

                <FormSubmit value={'Cambiar Contraseña'} />

            </Form>
        </>
    )
}
