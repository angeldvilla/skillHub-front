import Image from 'next/image'
import Link from 'next/link'

import { Login } from '@/modules/auth/ui/login'

import { DropdownMenu } from './dropdown-menu'
import ChangeLanguage from './language'
import ThemeController from './themeController'

export default function NavBar() {
  return (
    <nav className="navbar mb-0 border-b-2 border-blue-700 bg-base-100 pb-3">
      <div className="navbar-start">
        <DropdownMenu />
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
        <Login />
      </div>
    </nav>
  )
}
