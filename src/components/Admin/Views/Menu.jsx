import React, { useEffect } from "react";
import skillHub from "../../../assets/skillHub.jpg";
import { FaDashcube, FaUsers, FaFolder, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

 /*  const { user } = useSelector(state => state.users);


  const profileMenuItems2 = [
    {
      label: `${
        user ? `Bienvenido, ${user?.firstName} ${user?.lastName}` : ""
      }`,
      value: "my-profile",
    },
    {
      value: "home",
    },
    {
      value: "list-users",
    },
    {
      label: "Cerrar Sesión",
      value: "home",
      icon: PowerIcon,
      onclick: handleLogout,
    },
  ]; */

  return (
    <nav className="w-20 h-screen bg-[#213980] flex flex-col items-center justify-between sticky top-0 p-4 box-shadow-md">
      <img src={skillHub} alt="SkillHub Inc" className="w-16 mt-5 rounded-full" />

      <ul id="mainMenu" className="pt-6 w-7 flex flex-col items-center">
        <Icon icon={<FaDashcube />} />
        <Icon icon={<FaUsers />} />
        <Icon icon={<FaFolder />} />
        <Icon icon={<FaChartLine />} />
      </ul>

      <ul className="lastMenu w-7">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </nav>
  );
}

const Icon = ({ icon }) => (
  <li className="list-none mb-8 relative text-[#8c8a95] text-center w-full">
    <a href="/home" className="text-[24px] transition-all duration-300 hover:text-[#6bcc3e]">
      {icon}
      <span className="absolute top-2 left-[-10px] w-[0px] h-[20px] bg-[#6bcc3e] rounded-full transition-all duration-300"></span>
    </a>
  </li>
);

export default Menu;
