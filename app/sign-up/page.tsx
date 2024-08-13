import Image from 'next/image'

import SignUpForm from '@/modules/auth/components/sign-up-form'

export default async function Page() {
  return (
    <div>
      <div className="hero h-full bg-base-200">
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
        </div>
      </div>
    </div>
  )
}
