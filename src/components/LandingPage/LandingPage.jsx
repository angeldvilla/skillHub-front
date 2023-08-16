import React from "react";
import { Link, NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import backgroundImage from "../../assets/backgroundImage.jpg";
import logoSkillHub from "../../assets/skillHub.jpg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Cerrajero from "../../assets/Cerrajero.jpeg";
import Jardinero from "../../assets/Jardinero.jpg";
import Electricista from "../../assets/electrician.webp";
import Diseñador from "../../assets/Designer.avif";
import Footer from "../Footer/Footer";
import AbautUs from '../AbautUs/AbautUs'

export default function LandingPage() {
  const images = [
    backgroundImage,
    Diseñador,
    Jardinero,
    Electricista,
    Cerrajero,
  ];


  return (
    <div className="flex flex-col min-h-screen">
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
            background: #49595b;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #42b0e3;
          }
        `}
      </style>
      <div
        className="fixed top-0 left-0 w-full h-screen blur brightness-50"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}
      ></div>
      <nav className="fixed top-0 left-0 right-0 px-4 py-2 flex items-center justify-between bg-opacity-75 backdrop-blur-md">
      <div className="flex items-center space-x-4">
          <a href="/" className="gap-9">
            <img
              src={logoSkillHub}
              className="sticky -top-16 w-20 h-auto rounded-full border-4 border-sky-500 mt-2"
              alt="skillHub Logo"
            />
          </a>
        </div>

        <div className="flex ml-52 space-x-10 items-center">
          <NavLink to="/home" className="hover:translate-x-2 transition-transform duration-300 ease-in-out">
            <a className="text-white w-24" data-aos="fade-down">
              Inicio
            </a>
          </NavLink>

          <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out">
            <a href="#about-us" className="text-white w-24" data-aos="fade-down">
            Sobre Nosotros
          </a>
          </span> 

          <span className="hover:translate-x-2 transition-transform duration-300 ease-in-out">
            <a href="#contact" className="text-white w-24" data-aos="fade-down">
            Contactanos
          </a>
          </span>
        </div>
    
        <div className="flex space-x-7 justify-end">
          <Link
            to="/signin"
            className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/signup"
            className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
          >
            Registrate
          </Link>
        </div>
      </nav>
      <div className="min-h-screen flex flex-col items-center justify-center pt-16">
        <h1
          className="text-3xl text-white font-bold mt-20"
          data-aos="fade-down"
        >
          Bienvenidos a SkillHub
        </h1>
        <p
          className="text-white font-bold mt-2 mb-6"
          data-aos="fade-up"
        >
          Centro de Habilidades!
        </p>
        <ImageCarousel images={images} />
     {/*    <Link
          to="/home"
          className="bg-blue-800 hover:bg-sky-700 text-white px-4 py-2 rounded-full hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5 mt-7 mb-6"
          data-aos="fade-up"
        >
          Get Started!
        </Link> */}
      
        <div className="flex flex-col min-h-screen">
        <div id="about-us" data-aos-duration="2000" className="min-h-screen flex flex-col items-center justify-center pt-16">
          <AbautUs/>
        </div>

        <div id="contact" className="min-h-screen flex flex-col items-center justify-center pt-16 ">
    <h2 className="text-2xl font-bold text-white mb-4" data-aos="fade-down">
      Contacto
    </h2>
    <form className="w-1/2 bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
      <div className="mb-4">
        <label className="block text-black font-bold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          className="w-full p-2 border border-white bg-gray-800 rounded-md text-white"
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-bold mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <input
          className="w-full p-2 border border-white bg-gray-800 rounded-md text-white"
          type="email"
          id="email"
          name="email"
          placeholder="Correo Electrónico"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-bold mb-2" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="w-full p-2 border border-white bg-gray-800 rounded-md text-white"
          id="message"
          name="message"
          rows="4"
          placeholder="Escribe tu mensaje aquí"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-sky-700 transform transition-transform duration-200 hover:-translate-y-0.5"
      >
        Enviar
      </button>
    </form>
  </div>
      
        </div>

        <Footer />
      </div>
    </div>
  );
}
