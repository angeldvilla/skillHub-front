'use client'

import { useFormStatus } from 'react-dom'

export default function SignUpButton() {
  const { pending } = useFormStatus()

  console.log('pending', pending)

  return (
    <button
      aria-disabled={pending}
      className="btn btn-info text-white"
      type="submit"
      onClick={() => console.log('Register new user')}
    >
      Register
    </button>
  )
}
