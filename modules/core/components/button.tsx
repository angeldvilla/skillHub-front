import type { CustomButtonProps } from '@/types'

import Link from 'next/link'

export default function CustomButton({
  title,
  containerStyles,
  btnType
}: CustomButtonProps) {
  return (
    <Link href="/jobs">
      <button
        className={`relative flex flex-row items-center justify-center px-6 py-3 outline-none ${containerStyles}`}
        type={!btnType ? 'button' : 'submit'}
      >
        <span className="flex-1">{title}</span>
      </button>
    </Link>
  )
}
