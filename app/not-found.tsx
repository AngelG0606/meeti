import Link from 'next/link'
import Logo from '@/src/shared/components/ui/Logo'
import { HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 bg-slate-50">
      <div className="text-center max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-center mb-6">
          <div className="w-36">
            <Logo />
          </div>
        </div>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-50 text-pink-600 mb-4">
          <ExclamationTriangleIcon className="w-8 h-8" />
        </div>

        <span className="block text-6xl font-black text-pink-600 tracking-tight">404</span>

        <h1 className="mt-2 text-2xl font-bold text-slate-900 tracking-tight">
          Página no encontrada
        </h1>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Lo sentimos, la página que estás buscando no existe, ha sido movida o no está disponible temporalmente.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors shadow-sm"
          >
            <HomeIcon className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
