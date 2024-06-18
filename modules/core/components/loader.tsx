'use client'

function SVGLoader() {
  return (
    <svg
      className="loader-animation"
      fill="none"
      height="100px"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="12" x2="12" y1="18" y2="22" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
      <line x1="2" x2="6" y1="12" y2="12" />
      <line x1="18" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
    </svg>
  )
}

export default function Loader() {
  return (
    <div className="bg-grey-800 fixed inset-0 z-50 flex flex-col items-center justify-center bg-opacity-75">
      <SVGLoader />
      <h1>Loading...</h1>
    </div>
  )
}
