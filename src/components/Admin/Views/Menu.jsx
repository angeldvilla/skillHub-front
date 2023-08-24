import { useEffect } from "react";
import skillHub from "../../../assets/skillHub.jpg";
import {
  FaDashcube,
  FaUsers,
  FaFolder,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaStar,
  FaCcMastercard,
} from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../toolkit/Users/usersHandler";
import { toast } from "sonner";

const menuItems = [
  {
    icon: <FaDashcube />,
    label: "Dashboard",
    route: "admin",
  },
  {
    icon: <FaUsers />,
    label: "Usuarios",
    route: "list-users",
  },
  {
    icon: <FaFolder />,
    label: "Servicios",
    route: "list-services",
  },
  {
    icon: <FaCcMastercard />,
    label: "Pagos",
    route: "payments",
  },
  {
    icon: <FaStar className="hover:text-yellow-500" />,
    label: "Calificaciones",
    route: "reviews",
  },
];

function Menu({ expanded, toggleExpand }) {
  const lastMenu = [
    {
      icon: <FaCog />,
      label: "Settings",
      route: "settings",
    },
    {
      icon: <FaSignOutAlt />,
      label: "Logout",
    },
  ];

  const location = useLocation();

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

  return (
    <nav
      className={`w-16 ${
        expanded ? "w-52" : "16"
      } bg-[#213980] flex flex-col items-center justify-between sticky top-0 p-4 box-shadow-md`}
    >
      <button className="text-white mt-2 mb-4" onClick={toggleExpand}>
        <FaBars />
      </button>

      <img
        src={skillHub}
        alt="SkillHub Inc"
        className="w-24 mt-5 rounded-full"
      />

      <ul
        id="mainMenu"
        className={`pt-6 w-auto flex flex-col items-center ${
          expanded ? "expanded-menu" : ""
        }`}
      >
        {menuItems.map((item, index) => (
          <Icon
            key={index}
            icon={item.icon}
            label={item.label}
            route={item.route}
            expanded={expanded}
            isActive={location.pathname.includes(item.route)}
          />
        ))}
      </ul>

      <ul className="lastMenu w-7">
        {lastMenu.map((item2, index) => (
          <Icon
            key={index}
            icon={item2.icon}
            label={item2.label}
            route={item2.route}
            expanded={expanded}
            onClick={item2.onclick}
            isActive={location.pathname.includes(item2.route)}
            isLogout={item2.label === "Logout"}
          />
        ))}
      </ul>
    </nav>
  );
}

const Icon = ({icon, label, route, expanded, isActive, isLogout = false}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () => {
    toast.message("Hasta pronto! Su sesión ha sido cerrada");
    dispatch(logoutUser());
    setTimeout(() => {
      navigate("/home");
    });
  };

  return (
    <li
      className={`list-none mb-6 flex justify-center text-[#8c8a95] text-center w-auto ${
        expanded ? "expanded-icon" : ""
      }`}
    >
      {isLogout ? (
        <button
          onClick={handleLogout}
          className={`w-auto ${!expanded ? "w-auto mt-2" : ""}`}
          color="gray"
        >
          {!expanded && <FaSignOutAlt/> }
          {expanded && <p className="font-semibold flex gap-3 justify-center items-center hover:text-[#6bcc3e]"> <FaSignOutAlt/> Logout</p>}
        </button>
      ) : (
        <NavLink
          to={route}
          className={`flex items-center justify-center transition-all duration-300 hover:text-[#6bcc3e] ${
            isActive ? "text-[#6bcc3e]" : ""
          }`}
        >
          {icon}
          {expanded && (
            <p className={`ml-2 ${isActive ? "" : "font-semibold"}`}>{label}</p>
          )}
        </NavLink>
      )}
    </li>
  );
};

export default Menu;
