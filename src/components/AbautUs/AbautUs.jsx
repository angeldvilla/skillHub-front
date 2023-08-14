import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../AbautUs/Abaut.css";
import images from "./imagen/images.jpg";
import { Link } from "react-router-dom";

import Contacto from "./contact";

function AbautUs() {
  return (
    <div className="bodyStyle">
      <Header />
      <div
        className="quienesStyle"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div>
          <div>
            <img className="imagenStyle" src={images} alt="imgHenry" />
          </div>
          <h1>Quienes Somos </h1>
        </div>
        <p>
          Somos un grupo unido de compañeros, nos encontramos en la emocionante
          etapa final de nuestro bootcamp en Henry. A lo largo de este
          desafiante viaje, hemos compartido conocimientos, superado obstáculos
          y construido una amistad. Ahora, estamos inmersos en la creación de
          nuestro proyecto final, un hito que marcará nuestra graduación.
          Juntando nuestras habilidades individuales, estamos trabajando en
          equipo con entusiasmo y dedicación, listos para mostrar lo que hemos
          aprendido y logrado juntos en esta etapa transformadora de nuestras
          vidas.
        </p>
      </div>
      <div
        className="skillStyle"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1>Nuestra Mision</h1>
        <p>
          Nos esforzamos por ser un puente entre talentos subrepresentados y
          dispuestos a valorar habilidades y experiencia por encima de los
          títulos académicos. Nuestra plataforma intuitiva y centrada en el
          usuario ofrece una amplia gama de trabajos y recursos para empoderar a
          estos individuos en su búsqueda de empleo. Buscamos nivelar el campo
          de juego laboral al reconocer y resaltar el potencial y la dedicación,
          brindando así una plataforma inclusiva que fomente la diversidad y la
          igualdad de oportunidades.
        </p>
      </div>

      <div>
        <Contacto />
      </div>
      
      <footer className="bg-black bg-opacity-10 text-gray-400 text-sm pt-8 w-full">
      <div className="flex flex-col flex-wrap items-center md:flex-nowrap md:flex-row md:justify-between md:mx-8 lg:mx-12 xl:justify-between xl:mx-32 2xl:mx-48">
        <Link
          to="/terms-of-use"
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition"
        >
          TERMS OF USE
        </Link>
        <Link
          to="/privacy-policies"
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12"
        >
          PRIVACY POLICIES
        </Link>
        <Link
          to="/cookies-policies"
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12"
        >
          COOKIES POLICIES
        </Link>
        <Link
          to="/payment-policies"
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12 "
        >
          PAYMENT POLICIES
        </Link>
        <Link
          to="/contact-us"
          className="py-2 rounded-sm hover:text-white hover:border-cyan-700 transition lg:border-l-2 lg:pl-12"
        >
          CONTACT US
        </Link>
      </div>
      <div className="md:flex md:flex-row md:justify-around md:px-4 xl:mx-32 2xl:mx-64">
      
      </div>
    </footer>
    </div>
  );
}

export default AbautUs;
