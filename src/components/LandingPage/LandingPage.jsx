import backgroundImage from "../../assets/backgroundImage.jpg";
import logoSkillHub from "../../assets/skillHub.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="absolute top-0 left-0 w-full h-full blur brightness-50"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <nav className="flex items-center justify-beetwen px-4 py-2">
        <div className="flex items-center space-x-4">
          <a href="#" className="gap-9">
            <img
              src={logoSkillHub}
              className="sticky -top-16 w-20 h-auto rounded-full border-4 border-sky-500 mt-2"
              alt="skillHub Logo"
            />
          </a>
        </div>

        <div className="flex space-x-7">
          <a href="#" className="text-white-800">
            About Us
          </a>
          <a href="#" className="text-white-800">
            Contact
          </a>
        </div>

        <div className="flex space-x-7 justify-end">
          <Link
            to="/signin"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
          >
            Login
          </Link>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-bold mb-4">
          Welcome To SkillHub
        </h1>
        <p className="text-white font-bold mb-6">Connecting With Talent!</p>
        <Link
          to="/home"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
        >
          Get Started!
        </Link>

        <h3 className="text-white font-bold mt-8">Don't have an account?</h3>
        <Link to="/signup" className="text-blue-500 font-bold">
          Sign Up Here
        </Link>
      </div>
    </div>
  );
}
