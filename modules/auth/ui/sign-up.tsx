import Image from 'next/image'

import SignUpForm from '@/modules/auth/components/sign-up-form'

export default function SignUp() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="register-img"
          className="max-w-sm rounded-md shadow-2xl"
          height={300}
          src="/register-bg.webp"
          width={340}
        />
        <div className="px-20 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-12">
            Register with us so you can live the experience of offering your
            talent to the world, or find a talent with whom you genuinely
            connect... Welcome!!!
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <SignUpForm />
        </div>
        <hr className="mt-4 w-full border-gray-600" />
        <p className="text-center">Or continue with</p>
        <kbd className="kbd kbd-md bg-gray-200 hover:bg-gray-300 hover:transition-colors hover:duration-300 hover:ease-in-out">
          <button type="button">
            <Image
              alt="google"
              height={25}
              src="https://img.icons8.com/?size=256w&id=17949&format=png"
              width={25}
            />
          </button>
        </kbd>
      </div>
    </div>
  )
}
