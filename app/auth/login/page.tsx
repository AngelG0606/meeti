import LoginForm from "@/src/features/auth/components/LoginForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle('Iniciar Sesión')
}

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>

      <LoginForm />

      <nav className="flex justify-between items-center my-10">
        <Link href={'/auth/create-account'} className="text-sky-600 font-semibold  hover:underline cursor-pointer">
          ¿No tienes cuenta? Crea una.
        </Link>

        <Link href={'/auth/forgot-password'} className="text-sky-600 font-semibold  hover:underline cursor-pointer">
          Olvidaste tu contraseña? Recuperala.
        </Link>
      </nav>
    </>
  )
}