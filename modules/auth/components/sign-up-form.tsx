'use client'

import Link from 'next/link'
import { useActionState } from 'react'

import { FormControl } from '@/modules/auth/components/form-control'
import { SubmitFormButton } from '@/modules/auth/components/submit-form-button'
import { SignWithGoogleButton } from '@/modules/auth/ui/google-button'
import { createUser } from '@/modules/user/actions/actions'

const initialState = {
  email: '',
  username: '',
  name: '',
  password: ''
}

export default function SignUpForm() {
  const [_state, formAction] = useActionState(createUser, initialState)

  return (
    <form action={formAction} className="card-body">
      <FormControl label="Username" placeholder="john_doe" type="text" />
      <FormControl label="Name" placeholder="John Doe" type="text" />
      <FormControl
        label="Email"
        placeholder="john_doe@gmail.com"
        type="email"
      />
      <FormControl
        label="Password"
        placeholder="a-secure-password"
        type="password"
      />
      <FormControl
        label="Confirm password"
        placeholder="a-secure-password"
        type="password"
      />
      <label className="label" htmlFor="sign-in">
        <Link
          className="link-hover link label-text-alt text-blue-500"
          href="/sign-in"
        >
          Do you have an account? Login here!
        </Link>
      </label>
      <div className="form-control mt-6">
        <SubmitFormButton label="Sign up" />
        <hr className="mt-6 w-full border-gray-600" />
        <p className="mt-2 text-center">Or continue with</p>
        <SignWithGoogleButton />
      </div>
    </form>
  )
}
