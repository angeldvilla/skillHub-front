import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Accesibilidad.css";
import Atras from "../Atras";
const Accessibility = () => {
  return (
    <div className="BodyContainer">
      <Header />

      <div className="backgroundStyle">
        <div className="positionAtras">
          <Atras />
        </div>
        <h1>Centro de Accesibilidad</h1>
        <h2>
          Conectando la creatividad, la accesibilidad y la inspiración para todo
          el mundo.
        </h2>
      </div>
      <div className="containerParraf">
        <div className="contenedor">
          <h1>Declaración de accesibilidad </h1>
          <p>
            En Spotify, celebramos la creatividad y nos esforzamos por que todas
            las personas puedan usar nuestra plataforma, incluidos un millón de
            artistas y miles de millones de oyentes. Aprendemos de los expertos
            y empleamos personas con conocimiento en accesibilidad para hacer
            que la experiencia con cada uno de nuestros productos sea inclusiva.
            Trabajando en conjunto, nos proponemos empoderar a todas las
            personas para que puedan crear, descubrir e inspirarse.
          </p>
          <h1>Explora la accesibilidad en Spotify </h1>
          <p>
            Spotify Joins the Valuable 500 With a Commitment to Disability
            Inclusion (Spotify se une a The Valuable 500 con el compromiso de
            incluir a las personas con discapacidad)
          </p>
          <h1> Cómo contactarnos</h1>
          <p>
            Si tienes alguna pregunta o inquietud sobre la accesibilidad,
            comunícate con nosotros a través de cualquiera de los siguientes
            medios. Email: accessibility-support@spotify.com Escríbenos a Att:
            Accessibility Team Spotify USA Inc., 150 Greenwich Street, Floor 62,
            New York, NY 10007, USA Por cualquier consulta general, comunícate
            con Atención al Cliente a través del siguiente medio:
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Accessibility;