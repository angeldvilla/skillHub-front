'use client'

import { useFormStatus } from 'react-dom'

export default function SignInButton() {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      className="btn btn-info text-white"
      type="submit"
    >
      Sign In
    </button>
  )
}
