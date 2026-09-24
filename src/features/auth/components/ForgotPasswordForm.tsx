"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ForgotPassword, ForgotPasswordSchema } from "../schemas/authSchema";
import FormError from "@/src/shared/components/forms/FormError";
import { forgotPasswordRequestAction } from "../actions/auth.actions";
import toast from "react-hot-toast";

export default function ForgotPasswordForm() {

    const { register, handleSubmit, formState : {errors} } = useForm<ForgotPassword>({
        resolver : zodResolver(ForgotPasswordSchema),
        mode : 'all'
    })

    const onSubmit = async (formData : ForgotPassword) => {
        const { error, success } = await forgotPasswordRequestAction(formData)

        if(error) toast.error(error)

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
                id="email"
                type="email"
                placeholder="correo@correo.com"
                {...register('email')}
            />

            {errors.email && (
                <FormError>{errors.email.message}</FormError>
            )}

            <FormSubmit 
                value={'Recuperar Acceso'}
            />
            
        </Form>
    </>
  )
}
