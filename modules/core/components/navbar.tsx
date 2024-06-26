'use client'

import Image from 'next/image'
import Link from 'next/link'

import ThemeController from './themeController'
import ChangeLanguage from './language'

export default function NavBar() {
  return (
    <>
      <div className="navbar mb-1.5 bg-base-100">
        <div className="navbar-start">
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
        <div className="navbar-end flex items-center gap-4 px-4 lg:flex">
          <div className="flex items-center gap-4">
            <ThemeController />
            <ChangeLanguage />
          </div>
          <Link
            className="btn btn-outline hidden items-center justify-center border-blue-500 hover:border-gray-100 hover:bg-blue-500 hover:text-white hover:duration-300 hover:ease-linear lg:flex"
            href="/sign-up"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="h-0.5 w-full bg-blue-700" />
    </>
  )
}
