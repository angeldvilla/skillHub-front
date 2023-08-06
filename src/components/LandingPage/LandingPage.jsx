/* IMAGES */
import backgroundImage from "../../assets/backgroundImage.jpg";
import logoSkillHub from "../../assets/skillHub.jpg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Cerrajero from "../../assets/Cerrajero.jpeg";
import Jardinero from "../../assets/Jardinero.jpg";
import Electricista from "../../assets/electrician.webp";
import Diseñador from "../../assets/Designer.avif";
/* ------------------------ */

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const images = [backgroundImage, Diseñador, Jardinero, Electricista, Cerrajero];

  return (
    <div className="relative justify-center items-center h-screen bg-gray-800">
      <nav className="fixed top-0 left-0 right-0 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="gap-9">
            <img
              src={logoSkillHub}
              className="sticky -top-16 w-20 h-auto rounded-full border-4 border-sky-500 mt-2"
              alt="skillHub Logo"
            />
          </a>
        </div>

        <div className="flex space-x-7">
          <a href="#" className="text-white-800 w-24">
            ABOUT US
          </a>
          <a href="#" className="text-white-800">
            CONTACT
          </a>
        </div>

        <div className="flex space-x-7 justify-end">
          <Link
            to="/signin"
            className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
          >
            LOGIN
          </Link>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gray-800">
        
        <h1 className="text-3xl text-white font-bold mt-20">
          Welcome To SkillHub
        </h1>

        <p className="text-white font-bold mt-2 mb-6">Connecting With Talent!</p>
        
        <ImageCarousel images={images}/>
        
        <Link
          to="/home"
          className="bg-blue-800 hover:bg-sky-700 text-white px-4 py-2 rounded-full hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5 mt-7 mb-6"
        >
          Get Started!
        </Link>

        <h3 className="text-white font-bold mt-8">Don't have an account?</h3>
        <Link to="/signup" className="text-blue-500 font-bold mb-9">
          Sign Up Here
        </Link>

        <Footer />
      </div>
    </div>
  );
}
