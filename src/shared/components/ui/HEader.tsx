import Link from 'next/link'
import Logo from './Logo'

export default function HEader() {
    return (
        <header className="border-b border-gray-200">
            <div className="md:flex md:justify-between md:items-center max-w-7xl mx-auto p-5 lg:px-0">
                <div className="flex justify-center py-10 md:py-0">
                    <Link href='/'>
                        <div className="w-32">
                            <Logo />
                        </div>
                    </Link>
                </div>

                <nav className="flex justify-center items-center gap-4 mt-5 md:mt-0">
                    <Link
                        className="font-bold text-sm py-2 px-3 hover:bg-sky-500 hover:text-white transition-colors"
                        href="/auth/login"
                    >Iniciar Sesión</Link>
                    <Link
                        className=" font-bold text-sm bg-pink-600 hover:bg-pink-700 p-2  text-white transition-colors"
                        href="/auth/create-account"
                    >Registrarse</Link>
                </nav>
            </div>
        </header>
    )
}
