import Image from 'next/image'

export function SignWithGoogleButton() {
  return (
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
  )
}
