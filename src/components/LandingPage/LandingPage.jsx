import React from "react";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import backgroundImage from "../../assets/backgroundImage.jpg";
import logoSkillHub from "../../assets/skillHub.jpg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Cerrajero from "../../assets/Cerrajero.jpeg";
import Jardinero from "../../assets/Jardinero.jpg";
import Electricista from "../../assets/electrician.webp";
import Diseñador from "../../assets/Designer.avif";
import Footer from "../Footer/Footer";
import AbautUs from "../AbautUs/AbautUs";
import Contact from "./sectionContact";

export default function LandingPage() {
  const images = [
    backgroundImage,
    Diseñador,
    Jardinero,
    Electricista,
    Cerrajero,
  ];

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
      <section>
        <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed blur brightness-50 z-[-1]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
        <div className="fixed top-0 left-0 right-0 px-14 py-2 flex items-center justify-between bg-white">
          <div className="flex items-center space-x-4">
            <a href="" className="gap-9">
              <img
                src={logoSkillHub}
                className="-top-16 w-20 h-auto rounded-full border-2 border-black mt-2"
                alt="skillHub Logo"
              />
            </a>
          </div>
          <div className="flex ml-52 space-x-10 items-center">
            <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-lg">
              <a href="" className="text-black w-1/2" data-aos="fade-down">
                Inicio
              </a>
            </span>
            <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-lg">
              <a href="/home" className="text-black w-24" data-aos="fade-down">
                Servicios
              </a>
            </span>
            <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-lg">
              <a
                href="#about-us"
                className="text-black w-24"
                data-aos="fade-down"
              >
                Sobre Nosotros
              </a>
            </span>
            <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out text-lg">
              <a
                href="#contact"
                className="text-black w-24"
                data-aos="fade-down"
              >
                Contáctanos
              </a>
            </span>
          </div>
          <div className="flex space-x-5 justify-end">
            <NavLink
              to="/signin"
              className="text-blue-700 text-lg hover:text-blue-500 px-4 py-2 transform transition-transform duration-200 hover:-translate-y-0.5"
            >
              Iniciar Sesión
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-blue-700 hover:bg-blue-600 text-white text-center px-4 py-2 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
            >
              Regístrate
            </NavLink>
          </div>
        </div>
        <div className="flex text-center mt-40">
          <div className="flex justify-between items-center w-4/5 mx-auto">
            {/* Columna Izquierda */}
            <div className="w-1/2">
              <h1 className="text-5xl font-extrabold mb-4" data-aos="fade-down">
                ¡Bienvenidos a SkillHub!
              </h1>
              <p className="text-lg font-semibold mb-8" data-aos="fade-up">
                Tu Centro de Habilidades
              </p>
              <NavLink to="/home" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
                Ver ahora
              </NavLink>
            </div>

            {/* Columna Derecha */}
            <div className="w-1/2 z-[-1]">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE NOSOTROS */}
      <section id="about-us" className="bg-black py-16">
        <div className="container mx-auto">
          <h2
            className="text-3xl font-semibold text-center mb-8"
            data-aos="fade-up"
          >
            Sobre Nosotros
          </h2>
          <AbautUs />
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <section id="contact" className="py-16">
        <div className="container mx-auto">
          <h2
            className="text-3xl font-semibold text-center mb-8"
            data-aos="fade-up"
          >
            Contáctanos
          </h2>
          <Contact />
        </div>
      </section>

      <Footer />
    </div>
  );
}
