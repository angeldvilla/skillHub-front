import React, { useState } from "react";
import logoSkillHub from "../../assets/skillHub.jpg";
import userProfile from "../../assets/user-profile.svg";

export default function Header() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 font-sans bg-gray-500">
      <div className="flex items-center space-x-4">
        <a href="/" className="gap-9">
          <img
            src={logoSkillHub}
            className="w-20 h-auto rounded-full border-4 border-sky-500 mt-2"
            alt="skillHub Logo"
          />
        </a>
      </div>

      <div className="flex space-x-20 flex-grow justify-center">
        <a className="text-white-800 hover:bg-slate-600 rounded-md transform transition-transform duration-300 hover:-translate-y-0.5">
          FAVORITOS
        </a>
        <a
          href="/CreateWork"
          className="text-white-800 hover:bg-slate-600 rounded-md transform transition-transform duration-300 hover:-translate-y-0.5"
        >
          PUBLICAR SERVICIO
        </a>
        <a className="text-white-800 hover:bg-slate-600 rounded-md transform transition-transform duration-300 hover:-translate-y-0.5">
          UBICACIÓN
        </a>
      </div>

      <div className="relative">
        <div className="avatar">
          <button
            id="open-color-menu"
            onClick={toggleDropdown}
            className="focus:outline-none hover:transform transition-transform duration-300 hover:-translate-y-0.5"
          >
            <img src={userProfile} alt="User Profile" />
          </button>
        </div>
        {dropDownOpen && (
          <div className="dropdown-list absolute right-0 mt-2 bg-slate-600 border rounded-lg shadow-lg">
            <a href="/signin" className="dropdown-item block px-4 py-2 text-white hover:text-black">
              LOGIN
            </a>
            <hr className="my-2" />
            <a href="/signup" className="dropdown-item block px-4 py-2 text-white hover:text-black">
              SIGN UP
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
