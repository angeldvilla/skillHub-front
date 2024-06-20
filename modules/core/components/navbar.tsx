import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <div className="navbar mb-1.5 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="btn btn-ghost lg:hidden" role="button" tabIndex={0}>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h8m-8 6h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-blue-700 p-2 shadow">
              {' '}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" href="/">
            <Image
              alt="logo"
              className="rounded-full"
              height={50}
              src="/logo_sk.svg"
              width={50}
            />
            SkillHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal z-10 px-1"> </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-outline border-blue-400" href="/">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="h-0.5 w-full bg-blue-700" />
    </>
  )
}
