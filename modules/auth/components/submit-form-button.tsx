'use client'

import { useFormStatus } from 'react-dom'

interface Props {
  label: string
}

export function SubmitFormButton({ label }: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      className="btn btn-info text-white"
      type="submit"
    >
      {label}
    </button>
  )
}
