'use client'

import Link from 'next/link'
import { useActionState } from 'react'

import SignUpButton from '@/modules/auth/ui/sign-up-button'
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
      <div className="form-control">
        <label className="label" htmlFor="username">
          <span className="label-text">Username</span>
        </label>
        <input
          required
          className="input input-bordered placeholder-gray-500"
          name="username"
          placeholder="john_doe"
          type="text"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          required
          className="input input-bordered placeholder-gray-500"
          name="name"
          placeholder="johndoe"
          type="text"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          required
          className="input input-bordered placeholder-gray-500"
          name="email"
          placeholder="john_doe@gmail.com"
          type="email"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          required
          className="input input-bordered placeholder-gray-500"
          name="password"
          placeholder="a-secure-password"
          type="password"
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="confirmPassword">
          <span className="label-text">Confirm password</span>
        </label>
        <input
          required
          className="input input-bordered placeholder-gray-500"
          name="confirmPassword"
          placeholder="a-secure-password"
          type="password"
        />
      </div>
      <label className="label" htmlFor="sign-in">
        <Link
          className="link-hover link label-text-alt text-blue-500"
          href="/sign-in"
        >
          Do you have an account? Login here!
        </Link>
      </label>
      <div className="form-control mt-6">
        <SignUpButton />
      </div>
    </form>
  )
}
