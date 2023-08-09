import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import menu from "../../assets/menuDropDown.svg";
import home from "../../assets/home.svg";
import { Tabs, TabsHeader, Avatar } from "@material-tailwind/react";
import {
  FolderIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

export default function UserPanel() {
  const location = useLocation();

  const [menuDrop, setMenuDrop] = useState(false);

  const toggleMenu = () => {
    setMenuDrop(true);
  };

  const closeMenu = () => {
    setMenuDrop(false);
  };

  const data = [
    {
      label: "Perfil",
      value: "my-profile",
      icon: UserCircleIcon,
      desc: "PANEL DE PERFIL",
    },
    {
      label: "Mis Servicios",
      value: "WorkPublications",
      icon: FolderIcon,
      desc: "SERVICIOS PUBLICADOS POR EL USUARIO",
    },
    {
      label: "Ajustes",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: "EDITAR INFORMACION DE USUARIO",
    },
    {
      label: "Premium",
      value: "memberShip",
      icon: CreditCardIcon,
      desc: "HAZTE MIEMBRO",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`w-1/5 p-5 bg-gray-100 border-r border-gray-200 ${
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
          <button
            id="open-color-menu"
            onClick={toggleMenu}
            className="focus:outline-none hover:transform transition-transform duration-300 hover:-translate-x-0.5"
          >
            <img src={menu} alt="Menu" className="w-9 h-12" />
          </button>
        </div>
        <Link
            to={'/home'}
            className="focus:outline-none hover:transform transition-transform duration-300 hover:-translate-x-0.5"
          >
            <img src={home} alt="Menu" className="w-9 h-12 mb-5 flex items-center" />
          </Link>

        <Tabs value={location.pathname} orientation="vertical">
          <TabsHeader className="w-screen flex h-screen overflow-hidden gap-10 mb-5">
            {data.map(({ label, value, icon }) => (
              <Link
                to={`/user-panel/${value}`}
                key={value}
                className="block py-3 px-4 text-gray-600 hover:bg-gray-300 hover:text-gray-800 rounded-md"
              >
                <div className="flex items-center gap-2">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                  {label}
                </div>
              </Link>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
      <div className="flex-1 p-2 bg-gray overflow-y-auto">
        <Outlet /> {/* Muestra el contenido de las rutas anidadas */}
      </div>
      {menuDrop && (
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
}
