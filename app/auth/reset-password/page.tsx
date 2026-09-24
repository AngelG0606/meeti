import SetPasswordForm from "@/src/features/auth/components/SetPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle('Definir Nueva Contraseña')
}


export default function ResetPasswordPage() {
    return (
        <>
            <Heading>Definir Nueva Contraseña</Heading>

            <SetPasswordForm />

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
