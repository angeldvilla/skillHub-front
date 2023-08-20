/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoSkillHub from "../../assets/skillHub.jpg";
import userProfile from "../../assets/user-profile.svg";
import { logoutUser } from "../../toolkit/Users/usersHandler";

import {
  Collapse,
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
  ChevronDownIcon,
  FolderIcon,
  PowerIcon,
  Bars2Icon,
  CreditCardIcon,
  HomeIcon,
  PaperClipIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const ProfileMenu = ({ userAuth, handleLogout }) => {
  
  const { userCredentials } = useSelector(state => state.users);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // profile menu component
  const profileMenuItems = [
    {
      label: `${
        userAuth ? `Bienvenido, ${userAuth?.firstName} ${userAuth?.lastName}` : ""
      }`,
      value: "my-profile",
      icon: UserCircleIcon,
    },

    {
      label: "Inicio",
      value: "home",
      icon: HomeIcon,
    },
    {
      label: "Mis Servicios",
      value: "WorkPublications",
      icon: FolderIcon,
    },
    {
      label: "Publicar Servicio",
      value: "CreateWork",
      icon: PaperClipIcon,
    },
    {
      label: "Cerrar Sesión",
      value: "signin",
      icon: PowerIcon,
      onclick: handleLogout,
    },
  ];

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
            alt="User Profile"
            className="border border-blue-600 p-0.5"
            src={userAuth?.image || userProfile}
          />

          <ChevronDownIcon
            strokeWidth={9.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, value, onclick }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;

          return (
            <div key={key}>
              {isLastItem ? (
                <MenuItem
                  key={label}
                  onClick={onclick}
                  className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 text-red-500`,
                    strokeWidth: 2,
                  })}

                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal text-red-500"
                  >
                    {label}
                  </Typography>
                </MenuItem>
              ) : (
                <a key={key} href={`/user-panel/${userCredentials.uid}/${value}`}>
                  <MenuItem
                    key={label}
                    onClick={onclick || closeMenu}
                    className={`flex items-center gap-2 rounded hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4`,
                      strokeWidth: 2,
                    })}

                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                </a>
              )}
            </div>
          );
        })}
      </MenuList>
    </Menu>
  );
};

const NavList = () => {
  const { userCredentials } = useSelector(state=> state.users);
  
  // Nav List component
  const navListItems = [
    {
      label: "Ayuda",
      value: "help",
      icon: QuestionMarkCircleIcon,
    },
    {
      label: "Soporte",
      value: "support",
      icon: ShieldCheckIcon,
    },
    {
      label: "Suscripción",
      value: "membership",
      icon: CreditCardIcon,
    },
  ];

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, value }, key) => (
        <a
          key={key}
          href={`/user-panel/${userCredentials.uid}/${value}`}
          variant="large"
          color="blue-gray"
          className="font-normal"
        >
          {
            <MenuItem className="flex items-center gap-2 lg:rounded-full text-lg text-black">
              {React.createElement(icon, { className: "h-[24px] w-[24px]" })}{" "}
              {label}
            </MenuItem>
          }
        </a>
      ))}
    </ul>
  );
};

export default function Nav() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, userCredentials } = useSelector((state) => state.users);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen((cur) => !cur);
  };

  const handleLogout = () => {
    dispatch(logoutUser()); // Despacha la acción de cierre de sesión
  };

  useEffect(() => {
    // Escuchar el cambio en las credenciales y redirigir después de cerrar sesión
    if (!userCredentials) {
      navigate("/signin"); // Redirige al usuario a la página de inicio de sesión
    }
  }, [userCredentials]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className="w-full bg-gray-300 bg-opacity-50 backdrop-blur-xl lg:rounded-md lg:pl-6 px-4 py-2">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <a href={`/user-panel/${userCredentials.uid}/home`} className="gap-9">
            <img
              src={logoSkillHub}
              className="w-16 h-auto rounded-full border-2 border-black mt-"
              alt="skillHub Logo"
            />
          </a>
          <div className="absolute top-10 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
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
        </div>
        <ProfileMenu userAuth={user} handleLogout={handleLogout} />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
         <NavList /> 
      </Collapse>
    </div>
  );
}
