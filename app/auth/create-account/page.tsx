import RegisterForm from "@/src/features/auth/components/RegisterForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle('Crear Cuenta')
}

export default function RegisterPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>

      <RegisterForm />

      <nav className="flex justify-between items-center my-10">
        <Link href={'/auth/forgot-password'} className="text-sky-600 font-semibold  hover:underline cursor-pointer">
          ¿Olvidaste tu contraseña? Recuperala.
        </Link>

        <Link href={'/auth/login'} className="text-sky-600 font-semibold  hover:underline cursor-pointer">
          ¿Ya tienes una cuenta? Inicia sesión.
        </Link>
      </nav>
    </>
  )
}