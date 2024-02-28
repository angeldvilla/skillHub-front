import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton
} from '@material-tailwind/react'
import {
  UserCircleIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ArrowUpRightIcon,
  Bars2Icon,
  StarIcon
} from '@heroicons/react/24/outline'

import logoSkillHub from '../../assets/skillHub.jpg'
import userProfile from '../../assets/user-profile.svg'

function ProfileMenu() {
  const profileMenuItems = [
    {
      label: 'Iniciar Sesión',
      value: 'signin',
      icon: UserCircleIcon
    },
    {
      label: 'Registrarse',
      value: 'signup',
      icon: ArrowUpRightIcon
    }
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Menu handler={setIsMenuOpen} open={isMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          color="blue-gray"
          variant="text"
        >
          <Avatar
            alt="User"
            className="border border-blue-800 p-0.5"
            size="md"
            src={userProfile}
            variant="circular"
          />

          <ChevronDownIcon
            className={`h-3 w-3 transition-transform p-0.5 ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
            strokeWidth={9.5}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, value }, key) => {
          const isLastItem = key === profileMenuItems.length - 1

          return (
            <Link key={key} to={`/${value}`}>
              <MenuItem
                key={label}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? 'hover:bg-blue-500/10 focus:bg-blue-500/10 active:bg-blue-500/10'
                    : ''
                }`}
                onClick={closeMenu}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? 'text-blue-500' : ''}`,
                  strokeWidth: 2
                })}
                <Typography
                  as="span"
                  className="font-normal"
                  color={isLastItem ? 'blue' : 'inherit'}
                  variant="paragraph"
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          )
        })}
      </MenuList>
    </Menu>
  )
}

function NavList() {
  // Nav List component
  const navListItems = [
    {
      label: 'Ayuda',
      value: 'help',
      icon: QuestionMarkCircleIcon
    },
    {
      label: 'Soporte',
      value: 'support',
      icon: ShieldCheckIcon
    },
    {
      label: 'Calificanos',
      value: 'rating',
      icon: StarIcon
    }
  ]

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, value }, key) => (
        <a
          key={key}
          className="font-normal"
          color="blue-gray"
          href={`/${value}`}
        >
          <MenuItem
            className={`flex items-center gap-2 lg:rounded-full text-lg text-black ${
              value === 'membership' ? 'cursor-pointer' : ''
            }`}
          >
            {React.createElement(icon, { className: 'h-[24px] w-[24px]' })}{' '}
            {label}
          </MenuItem>
        </a>
      ))}
    </ul>
  )
}

export default function Header() {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropDownOpen((cur) => !cur)
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setDropDownOpen(false)
    )
  }, [])

  return (
    <div className="w-full bg-gray-400 lg:pl-6 px-4 py-2">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <a className="gap-9" href="/">
            <img
              alt="skillHub Logo"
              className="w-16 h-auto rounded-full border-4 border-black mt-2"
              src={logoSkillHub}
            />
          </a>
          <div className="absolute top-12 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>
          <IconButton
            className="ml-auto mr-2 lg:hidden"
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={toggleDropdown}
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>
        <ProfileMenu />
      </div>
      <Collapse className="overflow-scroll" open={dropDownOpen}>
        <NavList />
      </Collapse>
    </div>
  )
}
