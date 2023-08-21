import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage.jpg";
import logoSkillHub from "../../assets/skillHub.jpg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Cerrajero from "../../assets/Cerrajero.jpeg";
import Jardinero from "../../assets/Jardinero.jpg";
import Electricista from "../../assets/electrician.webp";
import Diseñador from "../../assets/Designer.avif";
import Footer from "../Footer/Footer";
import AbautUs from "../AbautUs/AbautUs";
import Contact from "./Contact";
import Services from "./Services";
import Score from "../Score/Score";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function LandingPage() {
  const images = [Diseñador, Jardinero, Electricista, Cerrajero];

  // Scroll to top feature
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <style>
        {`
          /* Estilos de scroll */
          ::-webkit-scrollbar {
            width: 12px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #7e7e7e;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #2f2f2fbd;
          }
        `}
      </style>
      <div className="fixed top-0 left-0 right-0 px-4 sm:px-4 py-1 flex items-center justify-between bg-gray-900 bg-opacity-50 backdrop-blur-xl shadow-2xl">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"></div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="" className="gap-2 sm:gap-4">
            <img
              src={logoSkillHub}
              className="-top-10 sm:-top-16 w-16 h-auto rounded-full border-2 border-black mt-1 sm:mt-2"
              alt="skillHub Logo"
            />
          </a>
        </div>
        <div className="flex ml-2 sm:ml-4 space-x-4 sm:space-x-8 items-center">
          <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-base sm:text-lg">
            <a
              href="#inicio"
              className="text-white w-16 sm:w-24"
              data-aos="fade-down"
            >
              Inicio
            </a>
          </span>
          <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-base sm:text-lg">
            <a
              href="#services"
              className="text-white w-16 sm:w-24"
              data-aos="fade-down"
            >
              Servicios
            </a>
          </span>
          <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-base sm:text-lg">
            <a
              href="#about-us"
              className="text-white w-16 sm:w-24"
              data-aos="fade-down"
            >
              Sobre Nosotros
            </a>
          </span>
          <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-base sm:text-lg">
            <a
              href="#contact"
              className="text-white w-16 sm:w-24"
              data-aos="fade-down"
            >
              Contáctanos
            </a>
          </span>
        </div>
        <div className="flex space-x-3 sm:space-x-5 justify-end">
          <NavLink
            to="/signin"
            className="bg-white hover:bg-gray-300 text-black text-center px-2 py-1 sm:px-3 sm:py-2 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
          >
            Iniciar Sesión
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-blue-700 hover:bg-blue-600 text-white text-center px-3 py-1 sm:px-4 sm:py-2 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
          >
            Regístrate
          </NavLink>
        </div>
      </div>

      <section
        id="inicio"
        className="h-screen flex flex-col justify-center items-center text-white py-20 sm:mb-32"
      >
        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            className="fixed bottom-10 right-6 bg-gray-900/75 hover:bg-gray-900 text-white py-4 px-3 rounded-lg z-100"
            onClick={scrollToTop}
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        )}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-center blur brightness-50 z-[-1]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>

        <div
          className="flex flex-col justify-center items-center w-11/12 sm:w-4/5 mx-auto mt-32 sm:mt-32" /* "flex justify-between items-center w-4/5 mx-auto mt-32" */
        >
          {/* Columna Izquierda */}
          <div className="w-full sm:w-1/2 mx-auto">
            <h1
              className="text-4xl sm:text-5xl font-extrabold mb-10 sm:mb-20 text-center gap-4 sm:gap-6"
              data-aos="fade-down"
            >
              ¡Bienvenidos a SkillHub!
            </h1>
          </div>

          <div className="w-full sm:w-1/2 mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8"
              data-aos="fade-up"
            >
              Tu Centro de Habilidades
            </h2>

            <span
              className="text-base sm:text-lg text-center font-medium mb-8 sm:mb-10"
              data-aos="fade-up"
            >
              Únete a nuestra comunidad y experimenta la flexibilidad y la
              eficiencia de encontrar a la persona adecuada para tus
              necesidades, sin la formalidad tradicional. ¡Empieza a explorar y
              a ofrecer tus habilidades hoy mismo en SkillHub!
            </span>

            <div className="mt-8 sm:mt-12 justify-center">
              <NavLink
                to="/home"
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
              >
                Ver ahora
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-12 sm:py-16 flex justify-center items-center z-[-1]">
        <div className="w-full">
          <ImageCarousel images={images} />
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <Services />

      {/* SECCIÓN SOBRE NOSOTROS */}
      <section id="about-us" className="bg-blue-800 py-16">
        <div className="container mx-auto">
          <AbautUs />
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <Contact />

      {/* SECCIÓN DE REVIEWS */}
      <section className="bg-gray-900 flex justify-center py-16">
        <Score />
      </section>

      <Footer />
    </div>
  );
}
