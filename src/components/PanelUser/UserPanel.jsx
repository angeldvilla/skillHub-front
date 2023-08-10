import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import menu from "../../assets/menuDropDown.svg";
import home from "../../assets/home.svg";
import Nav from './Nav';
import { Tabs, TabsHeader, Avatar } from "@material-tailwind/react";
import {
  FolderIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  PaperClipIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function UserPanel() {
  const location = useLocation();

  const [menuDrop, setMenuDrop] = useState(true);

  const toggleMenu = () => {
    setMenuDrop(!menuDrop);
  };

  const data = [
    {
      label: "Perfil",
      value: "my-profile",
      icon: UserCircleIcon,
      active: location.pathname.includes("my-profile"),
    },

    {
      label: "Mis Servicios",
      value: "WorkPublications",
      icon: FolderIcon,
      active: location.pathname.includes("WorkPublications"),
    },

    {
      label: "Publicar Servicio",
      value: "CreateWork",
      icon: PaperClipIcon,
      active: location.pathname.includes("CreateWork"),
    },

    {
      label: "Ajustes",
      value: "settings",
      icon: Cog6ToothIcon,
      active: location.pathname.includes("settings"),
    },

    {
      label: "Premium",
      value: "memberShip",
      icon: CreditCardIcon,
      active: location.pathname.includes("memberShip"),
    },

    {
      label: "Cerrar Sesión",
      value: "logout",
      icon: PowerIcon,
      active: location.pathname.includes("logout"),
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`w-1/5 p-5 bg-gray-400 border-r border-gray-200 ${
          menuDrop ? "hidden" : ""
        }`}
        >
        <div className="mb-10 flex justify-between items-center">
          <div>
            <Avatar
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="avatar"
              size="lg"
            />
          </div>
          <h2 className="text-black">NOMBRE USER</h2>
        </div>
        <a
            href={'/home'}
            className="focus:outline-none hover:transform transition-transform duration-300 hover:-translate-x-0.5"
          >
          <img src={home} alt="Menu" className="w-9 h-12 mb-5 flex items-center" />
        </a>

        <Tabs value={location.pathname} orientation="vertical">
          <TabsHeader className="w-screen flex h-screen overflow-hidden gap-5 mb-5 bg-gray-400">
            {data.map(({ label, value, icon, active }) => (
              <a
                href={`/user-panel/${value}`}
                key={value}
                className={`block py-3 px-4  hover:bg-gray-300 hover:text-gray-800 rounded-md transition-colors duration-300 ${
                  active
                    ? "text-black bg-gray-500 hover:bg-gray-500 translate-x-3 delay-150 hover:text-gray-800"
                    : "text-black hover:bg-gray-400 hover:text-gray-800"
                }`}
              >
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })
                   }
                  {label}
              </a>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
      <div className="flex-1 p-4 bg-gray">
        <div className="flex items-center justify-between mb-5">
          <button
            id="open-color-menu"
            onClick={toggleMenu}
            className="focus:outline-none hover:transform transition-transform duration-300 hover:-translate-x-0.5"
          >
            <img src={menu} alt="Menu" className="w-9 h-12" />
          </button>
          <Nav />
        </div>
        <Outlet /> {/* Muestra el contenido de las rutas anidadas */}
      </div>
      
    </div>
  
  );
}