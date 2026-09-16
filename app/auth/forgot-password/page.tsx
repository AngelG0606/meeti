import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
  title : generatePageTitle('Recuperar Contraseña')
}


export default function ForgotPasswordPage() {
  return (
    <>
      <Heading>Recupera tu acceso a Meeti</Heading>
      
      <ForgotPasswordForm />

      <nav className="flex justify-between items-center my-10">
        <Link href={'/auth/create-account'} className="text-sky-600 font-semibold  hover:underline cursor-pointer">
          ¿No tienes cuenta? Crea una.
        </Link>

        <Link href={'/auth/login'} className="text-sky-600 font-semibold  hover:underline cursor-pointer">
          ¿Ya tienes una cuenta? Inicia sesión.
        </Link>
      </nav>

    </>
  )
}
