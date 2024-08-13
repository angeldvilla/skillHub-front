import Image from 'next/image'
import Link from 'next/link'

import SignInButton from './sign-in-button'

export default function SignInForm() {
  return (
    <form className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          required
          className="input input-bordered"
          placeholder="email"
          type="email"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Password</span>
        </label>
        <input
          required
          className="input input-bordered"
          placeholder="password"
          type="password"
        />
        <label className="label" htmlFor="sign-up">
          <Link
            className="link-hover link label-text-alt text-end text-blue-600"
            href="/sign-up"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <SignInButton />
        <hr className="mt-6 w-full border-gray-600" />
        <p className="mt-2 text-center">Or continue with</p>
        <button
          className="btn btn-accent mx-auto my-4 w-full rounded-btn bg-gray-200 py-2.5 transition-colors hover:bg-white hover:transition-colors"
          type="button"
        >
          <Image
            alt="google"
            height={25}
            src="https://img.icons8.com/?size=256w&id=17949&format=png"
            width={25}
          />
        </button>
      </div>
    </form>
  )
}
