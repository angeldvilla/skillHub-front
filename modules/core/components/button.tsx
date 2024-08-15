import Link from 'next/link'

interface Props {
  title: string
  className?: string
  btnType?: 'button' | 'submit'
  route?: string
}

export default function CustomButton({
  title,
  className,
  btnType,
  route
}: Props) {
  return (
    <Link href={route ? route : '/'}>
      <button
        className={`relative flex flex-row items-center justify-center px-6 py-3 outline-none ${className}`}
        type={!btnType ? 'button' : 'submit'}
      >
        <span className="flex-1">{title}</span>
      </button>
    </Link>
  )
}
