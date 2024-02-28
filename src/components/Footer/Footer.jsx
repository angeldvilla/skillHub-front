import { Toaster, toast } from 'sonner'
import { useSelector } from 'react-redux'

import mercadopago from '../../assets/mercadopago.png'

export default function Footer() {
  const { userCredentials } = useSelector((state) => state.users)

  return (
    <footer className="bg-blue-800 text-gray-400 text-md pt-8 w-full">
      <div className="flex flex-col flex-wrap items-center md:flex-nowrap md:flex-row md:justify-between md:mx-8 lg:mx-12 xl:justify-between xl:mx-32 2xl:mx-48">
        <a
          href={
            userCredentials === null
              ? '/terms-of-use'
              : `/user-panel/${userCredentials.uid}/terms-of-use`
          }
        >
          <button
            className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition"
            name="Condiciones de uso"
          >
            Condiciones de uso
          </button>
        </a>
        <button
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12"
          name="Políticas de privacidad"
        >
          <a
            href={
              userCredentials === null
                ? '/privacy-policies'
                : `/user-panel/${userCredentials.uid}/privacy-policies`
            }
          >
            Políticas de Privacidad
          </a>
        </button>

        <button
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12 "
          name="accessibility"
        >
          <a
            href={
              userCredentials === null
                ? '/accessibility'
                : `/user-panel/${userCredentials.uid}/accessibility`
            }
          >
            Accesibilidad
          </a>
        </button>

        <a
          href={
            userCredentials === null
              ? '/payment-policies'
              : `/user-panel/${userCredentials.uid}/payment-policies`
          }
        >
          <button
            className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12 "
            name="Políticas de pago"
          >
            Politicas de Pago
          </button>
        </a>
      </div>
      <div className="md:flex md:flex-row md:justify-around md:px-4 xl:mx-32 xl:mt-8 2xl:mx-64">
        <div className="flex justify-center">
          <img
            alt="mercadopago-logo"
            className="w-40 hover:cursor-pointer"
            src={mercadopago}
            onClick={() => window.open('https://www.mercadopago.com.ar/')}
          />
        </div>
        <div className="flex flex-col justify-center text-center">
          <p className="font-bold text-lg mb-1.5">SKILLHUB INC.</p>
          <p>Henry Bootcamp</p>
          <p>Henry PF</p>
          <p>ARG, COL, PE - +54 123-456-7890</p>
        </div>
        <div className="text-center mt-10 mb-6 md:flex md:items-center">
          <p className="font-bold text-lg">
            Copyright © {new Date().getFullYear()} SkillHub
          </p>
        </div>
      </div>
      <Toaster closeButton />
    </footer>
  )
}
