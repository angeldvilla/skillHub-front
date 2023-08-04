import logoSkillHub from "../../assets/skillHub.jpg";

export default function Header() {
  return (
    <nav className="flex items-center justify-beetwen px-4 py-2 font-mono bg-gray-500">
      <div className="flex items-center space-x-4">
        <a href="/" className="gap-9">
          <img
            src={logoSkillHub}
            className="sticky -top-16 w-20 h-auto rounded-full border-4 border-sky-500 mt-2"
            alt="skillHub Logo"
          />
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <a className="text-white-800">FAVORITES</a>

        <a className="text-white-800">POST SERVICE</a>

        <a className="text-white-800">UBICATION</a>

        <a className="text-white-800 rounded-full border-4 border-sky-500">
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#fbf9f9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}