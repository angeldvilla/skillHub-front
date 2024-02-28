/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
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
  ChevronDownIcon,
  FolderIcon,
  PowerIcon,
  Bars2Icon,
  CreditCardIcon,
  HomeIcon,
  PaperClipIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

import logoSkillHub from '../../assets/skillHub.jpg'
import userProfile from '../../assets/user-profile.svg'
import { logoutUser } from '../../toolkit/Users/usersHandler'

function ProfileMenu({ userAuth, handleLogout }) {
  const { id } = useParams()

  const { userCredentials } = useSelector((state) => state.users)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (id === 'Zqaz0B6durdS841Bd7e3qJdbjEU2') setIsAdmin(true)
  }, [id])

  // profile menu component
  const profileMenuItems = [
    {
      label: `${
        userAuth
          ? `Bienvenido, ${userAuth?.firstName} ${userAuth?.lastName}`
          : ''
      }`,
      value: 'my-profile',
      icon: UserCircleIcon
    },

    {
      label: 'Inicio',
      value: 'home',
      icon: HomeIcon
    },
    {
      label: 'Mis Servicios',
      value: 'WorkPublications',
      icon: FolderIcon
    },
    {
      label: 'Publicar Servicio',
      value: 'CreateWork',
      icon: PaperClipIcon
    },
    {
      label: 'Cerrar Sesión',
      value: 'signin',
      icon: PowerIcon,
      onclick: handleLogout
    }
  ]

  const profileMenuItems2 = [
    {
      label: `${
        userAuth
          ? `Bienvenido, ${userAuth?.firstName} ${userAuth?.lastName}`
          : ''
      }`,
      icon: UserCircleIcon
    },
    {
      label: 'Cerrar Sesión',
      icon: PowerIcon,
      onclick: handleLogout
    }
  ]

  return (
    <Menu handler={setIsMenuOpen} open={isMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          color="blue-gray"
          variant="text"
        >
          <Avatar
            alt="User Profile"
            className="border border-blue-600 p-0.5"
            size="md"
            src={userAuth?.image || userProfile}
            variant="circular"
          />

          <ChevronDownIcon
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
            strokeWidth={9.5}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {isAdmin
          ? profileMenuItems2.map(({ label, icon, onclick }, key) => {
              const isLastItem = key === profileMenuItems2.length - 1

              return (
                <div key={key}>
                  {isLastItem ? (
                    <MenuItem
                      key={label}
                      className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      onClick={onclick}
                    >
                      {React.createElement(icon, {
                        className: `h-4 w-4 text-red-500`,
                        strokeWidth: 2
                      })}

                      <Typography
                        as="span"
                        className="font-normal text-red-500"
                        variant="small"
                      >
                        {label}
                      </Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      key={label}
                      className="flex items-center gap-2 rounded hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10"
                      onClick={onclick || closeMenu}
                    >
                      {React.createElement(icon, {
                        className: `h-4 w-4`,
                        strokeWidth: 2
                      })}

                      <Typography
                        as="span"
                        className="font-normal"
                        variant="small"
                      >
                        {label}
                      </Typography>
                    </MenuItem>
                  )}
                </div>
              )
            })
          : profileMenuItems.map(({ label, icon, value, onclick }, key) => {
              const isLastItem = key === profileMenuItems.length - 1

              return (
                <div key={key}>
                  {isLastItem ? (
                    <MenuItem
                      key={label}
                      className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      onClick={onclick}
                    >
                      {React.createElement(icon, {
                        className: `h-4 w-4 text-red-500`,
                        strokeWidth: 2
                      })}

                      <Typography
                        as="span"
                        className="font-normal text-red-500"
                        variant="small"
                      >
                        {label}
                      </Typography>
                    </MenuItem>
                  ) : (
                    <a
                      key={key}
                      href={`/user-panel/${userCredentials.uid}/${value}`}
                    >
                      <MenuItem
                        key={label}
                        className="flex items-center gap-2 rounded hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10"
                        onClick={onclick || closeMenu}
                      >
                        {React.createElement(icon, {
                          className: `h-4 w-4`,
                          strokeWidth: 2
                        })}

                        <Typography
                          as="span"
                          className="font-normal"
                          variant="small"
                        >
                          {label}
                        </Typography>
                      </MenuItem>
                    </a>
                  )}
                </div>
              )
            })}
      </MenuList>
    </Menu>
  )
}

function NavList() {
  const { userCredentials } = useSelector((state) => state.users)

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
      label: 'Suscripción',
      value: 'membership',
      icon: CreditCardIcon
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
          href={`/user-panel/${userCredentials.uid}/${value}`}
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full text-lg text-black">
            {React.createElement(icon, { className: 'h-[24px] w-[24px]' })}{' '}
            {label}
          </MenuItem>
        </a>
      ))}
    </ul>
  )
}

export default function Nav() {
  const { id } = useParams()

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (id === 'Zqaz0B6durdS841Bd7e3qJdbjEU2') setIsAdmin(true)
  }, [id])

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { user, userCredentials } = useSelector((state) => state.users)

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleIsNavOpen = () => {
    setIsNavOpen((cur) => !cur)
  }

  const handleLogout = () => {
    dispatch(logoutUser())
    setTimeout(() => {
      toast.message('Hasta pronto! Su sesión ha sido cerrada')
      navigate('/home')
    })
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    )
  }, [])

  return (
    <>
      {isAdmin ? (
        <div className="w-full bg-gray-300 bg-opacity-50 backdrop-blur-xl lg:pl-6 px-4 py-2">
          <IconButton
            className="ml-auto mr-2 lg:hidden"
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={toggleIsNavOpen}
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <ProfileMenu handleLogout={handleLogout} userAuth={user} />
        </div>
      ) : (
        <div className="w-full bg-gray-300 bg-opacity-50 backdrop-blur-xl lg:pl-6 px-4 py-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
              <a
                className="gap-9"
                href={`/user-panel/${userCredentials.uid}/home`}
              >
                <img
                  alt="skillHub Logo"
                  className="w-16 h-auto rounded-full border-2 border-black mt-"
                  src={logoSkillHub}
                />
              </a>
              <div className="absolute top-10 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                <NavList />
              </div>
              <IconButton
                className="ml-auto mr-2 lg:hidden"
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={toggleIsNavOpen}
              >
                <Bars2Icon className="h-6 w-6" />
              </IconButton>
            </div>
            <ProfileMenu handleLogout={handleLogout} userAuth={user} />
          </div>
          <Collapse className="overflow-scroll" open={isNavOpen}>
            <NavList />
          </Collapse>
        </div>
      )}
    </>
  )
}
