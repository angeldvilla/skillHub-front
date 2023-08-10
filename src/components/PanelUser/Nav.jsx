import React, { useState, useEffect } from "react";
import logoSkillHub from "../../assets/skillHub.jpg";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  HeartIcon,
  MapPinIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  FolderIcon,
  PowerIcon,
  Bars2Icon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

// profile menu component
const profileMenuItems = [
  {
    label: "Mi Perfil",
    value: "my-profile",
    icon: UserCircleIcon,
  },

  {
    label: "Mis Servicios",
    value: "WorkPublications",
    icon: FolderIcon,
  },

  {
    label: "Suscripción",
    value: "memberShip",
    icon: CreditCardIcon,
  },

  {
    label: "Editar Perfil",
    value: "settings",
    icon: Cog6ToothIcon,
  },

  {
    label: "Cerrar Sesión",
    value: "logout",
    icon: PowerIcon,
  },
];

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            className="border border-blue-600 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, value }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <a
            key={key}
            href={`/user-panel/${value}`}
            >
             {
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
             }
            </a>
          );
        })}
      </MenuList>
    </Menu>
  );
};

// Nav List component
const navListItems = [
  {
    label: "Favoritos",
    value: "favorites",
    icon: HeartIcon,
  },
/*   {
    label: "Publicar Servicio",
    value: "CreateWork",
    icon: PaperClipIcon,
  }, */
  {
    label: "Ubicación",
    value: "ubication",
    icon: MapPinIcon,
  },

];

const NavList = () => {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, value }, key) => (
        <a
          key={key}
          href={`/${value}`}
          variant="large"
          color="blue-gray"
          className="font-normal"
        >
          {
            <MenuItem className="flex items-center gap-2 lg:rounded-full text-lg">
              {React.createElement(icon, { className: "h-[24px] w-[24px]" })}{" "}
              {label}
            </MenuItem>
          }
        </a>
      ))}
    </ul>
  );
};

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen((cur) => !cur);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="max-w-screen bg-gray-200 lg:rounded-md lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-900 ">
        <a href="/home" className="gap-9">
          <img
            src={logoSkillHub}
            className="w-20 h-auto rounded-full border-4 border-sky-500 mt-2"
            alt="skillHub Logo"
          />
        </a>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
