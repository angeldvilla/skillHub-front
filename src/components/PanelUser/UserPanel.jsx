import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  FolderIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  HomeModernIcon
} from "@heroicons/react/24/solid";

export default function UserPanel() {

  const location = useLocation();
 
  const data = [
 /*    {
      label: "Home",
      value: "home",
      icon: HomeModernIcon,
      desc: `PANEL DE PERFIL`,
    }, */
    {
      label: "Perfil",
      value: "user",
      icon: UserCircleIcon,
      desc: `PANEL DE PERFIL`,
    },
    {
      label: "Mis Servicios",
      value: "WorkPublications",
      icon: FolderIcon,
      desc: `SERVICIOS PUBLICADOS POR EL USUARIO`,
    },
    {
      label: "Ajustes",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `EDITAR INFORMACION DE USUARIO`,
    },
    {
        label: "Premium",
        value: "memberShip",
        icon: CreditCardIcon,
        desc: `HAZTE MIEMBRO`,
    },
  ];
  return (
    <div className="flex">
    <Tabs value={location.pathname} orientation="vertical">
      <TabsHeader className="w-40">
      <Link to={'/home'}>Home</Link>
        {data.map(({ label, value, icon }) => (
          <Link
            to={`/my-profile/${value}`}
            key={value}
          >
            <Tab key={value} value={`/my-profile/${value}`} className="place-items-end">
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          </Link>
        ))}
      </TabsHeader>
    </Tabs>
      <div className="flex-1">
        <Outlet /> {/* Muestra el contenido de las rutas anidadas */}
      </div>
    </div>
  );
}
