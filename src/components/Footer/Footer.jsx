import { Link } from 'react-router-dom'
import mercadopago from '../../assets/mercadopago.png'

export default function Footer() {
  return (
    <footer className='bg-black bg-opacity-10 text-gray-400 font-mono pt-8 w-full'>
      <div className='flex flex-col flex-wrap items-center md:flex-nowrap md:flex-row md:justify-between md:mx-8 lg:mx-12 xl:justify-between xl:mx-32 2xl:mx-48'>
        <Link
          to='/terms-of-use'
          className='py-2 rounded-sm hover:text-white hover:border-cyan-700 transition'
        >
          TERMS OF USE
        </Link>
        <Link
          to='/privacy-policies'
          className='py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12'
        >
          PRIVACY POLICIES
        </Link>
        <Link
          to='/cookies-policies'
          className='py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12'
        >
          COOKIES POLICIES
        </Link>
        <Link
          to='/payment-policies'
          className='py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12 '
        >
          PAYMENT POLICIES
        </Link>
        <Link
          to='/contact-us'
          className='py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12'
        >
          CONTACT US
        </Link>
      </div>
      <div className='md:flex md:flex-row md:justify-around md:px-4 xl:mx-32 2xl:mx-64'>
        <div className='flex justify-center'>
          <img
            src={mercadopago}
            alt='mercadopago-logo'
            className='w-40 h-auto'
          />
        </div>
        <div className='flex flex-col justify-center text-center'>
          <p className='font-bold text-lg mb-1.5'>SKILLHUB INC.</p>
          <p>HENRY BOOTCAMP</p>
          <p>HENRY PF</p>
          <p>ARG, COL, PE - +54 123-456-7890</p>
        </div>
        <div className='text-center mt-10 mb-6 md:flex md:items-center'>
          <p>Copyright © {new Date().getFullYear()} SkillHub</p>
        </div>
      </div>
    </footer>
  )
}
