'use client'

import Link from 'next/link'

export function DropdownMenu() {
  return (
    <div className="dropdown">
      <div
        className="btn btn-ghost lg:hidden"
        role="button"
        tabIndex={0}
        onClick={() => {
          const menu = document.getElementById('dropdown-menu')

          menu?.classList.toggle('hidden')
        }}
      >
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
      <ul
        className="menu dropdown-content menu-sm z-[1] mt-3 hidden w-52 rounded-box bg-blue-700 p-2 shadow lg:block"
        id="dropdown-menu"
      >
        <li className="items-center">
          <Link href="/">Home</Link>
        </li>
        <li className="items-center">
          <Link href="/">Services</Link>
        </li>
        <li className="items-center">
          <Link
            className="btn btn-outline border-blue-500 hover:border-gray-100 hover:bg-blue-500 hover:text-white hover:duration-300 hover:ease-linear"
            href="/sign-up"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  )
}
