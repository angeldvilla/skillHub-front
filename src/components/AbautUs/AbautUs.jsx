import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../AbautUs/Abaut.css";
import images from "./imagen/images.jpg";

import Contacto from "./contact";

function AbautUs() {
  return (
    <div>
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
            Somos un grupo unido de compañeros, nos encontramos en la
            emocionante etapa final de nuestro bootcamp en Henry. A lo largo de
            este desafiante viaje, hemos compartido conocimientos, superado
            obstáculos y construido una amistad. Ahora, estamos inmersos en la
            creación de nuestro proyecto final, un hito que marcará nuestra
            graduación. Juntando nuestras habilidades individuales, estamos
            trabajando en equipo con entusiasmo y dedicación, listos para
            mostrar lo que hemos aprendido y logrado juntos en esta etapa
            transformadora de nuestras vidas.
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
            usuario ofrece una amplia gama de trabajos y recursos para empoderar
            a estos individuos en su búsqueda de empleo. Buscamos nivelar el
            campo de juego laboral al reconocer y resaltar el potencial y la
            dedicación, brindando así una plataforma inclusiva que fomente la
            diversidad y la igualdad de oportunidades.
          </p>
        </div>

        <div>
          <Contacto />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AbautUs;
