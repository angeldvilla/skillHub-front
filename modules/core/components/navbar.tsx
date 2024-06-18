import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
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
          <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
              <ul className="p-2">
                <li>
                  <Link href="/">Our Team</Link>
                </li>
                <li>
                  <Link href="/">Reviews</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href="/">
          SkillHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>About</summary>
              <ul className="p-2">
                <li>
                  <Link href="/">Our Team</Link>
                </li>
                <li>
                  <Link href="/">Reviews</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href="/">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
