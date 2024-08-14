import Image from 'next/image'
import Link from 'next/link'

import { FormControl } from '@/modules/auth/components/form-control'
import { SubmitFormButton } from '@/modules/auth/components/submit-form-button'

export default function SignInForm() {
  return (
    <form className="card-body">
      <FormControl label="Username" placeholder="john_doe" type="text" />
      <FormControl
        label="Password"
        placeholder="a-secure-password"
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
      <div className="form-control mt-6">
        <SubmitFormButton label="Sign in" />
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
