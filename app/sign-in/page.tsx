import Image from 'next/image'

import SignInForm from '@/modules/auth/components/sign-in-form'

export default async function Page() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          alt="login-img"
          className="max-w-sm rounded-badge shadow-2xl"
          height={300}
          src="/login-bg.webp"
          width={340}
        />
        <div className="px-12 text-center lg:text-right">
          <h1 className="text-5xl font-bold">Welcome back!</h1>
          <p className="py-12">
            Sign in in your account use your credentials or create a new account
            if you dont have one for use our services.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
