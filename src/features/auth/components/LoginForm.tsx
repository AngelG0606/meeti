"use client"

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"




export default function LoginForm() {
  return (
    <>
        <Form>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput 
                type="email"
                id="email"
                placeholder="correo@correo.com"
            />

            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput 
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
            />

            <FormSubmit 
                value="Iniciar Sesión"
            />
        </Form>
    </>
  )
}
