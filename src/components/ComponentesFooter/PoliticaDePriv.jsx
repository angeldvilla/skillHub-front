import "./componentes.css";
import { IoIosBulb } from "react-icons/io";
import { TfiLock } from "react-icons/tfi";
import { RiToolsFill } from "react-icons/ri";
import Footer from "../Footer/Footer";
import goBack from "./utils/functionAtras";

const PoliticaDePriv = () => {
  return (
    <div className="containerPolitici bg-black">
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <div className="boton-container">
              <button className="boton" onClick={goBack}>
                ATRAS
              </button>
            </div>
            <div className="iconStyle">
              <h1>
                <TfiLock />
              </h1>
            </div>

            <h1>Politica de Privacidad</h1>

            <h3 className="efect">Tu privacidad es importante para nosotros... @SkillHub.netlify.app</h3>

            <div className="containerBackgrond">
              <p>
                <span>
                  <IoIosBulb />
                </span>
                El objetivo de SkillHub es conectar a los profesionales de todo
                el mundo para ayudarles a ser más productivos y a alcanzar sus
                metas laborales. La clave de esta misión es nuestro compromiso
                de transparencia acerca de los datos que recopilamos sobre ti,
                el modo en que se utilizan y con quién se comparten. Esta
                Política de privacidad se aplica cuando utilizas nuestros
                servicios (descritos a continuación). Ofrecemos a nuestros
                usuarios distintas opciones acerca de los datos que recopilamos,
                utilizamos y compartimos, según se describe en esta Política de
                privacidad, en la Política de cookies, en la Configuración, así
                como en nuestro Centro de ayuda.
              </p>
            </div>

            <figcaption className="mt-10">
              <div className="containerOp">
                <h4>Introducción</h4>
                <div className="containerBackgrond">
                  <span>
                    <IoIosBulb />
                  </span>
                  <p>
                    Somos una red social y una plataforma en línea para
                    profesionales. La gente utiliza nuestros Servicios para
                    encontrar oportunidades laborales o para que estas les
                    encuentren, así como para conectarse con otras personas y
                    acceder a la información. Nuestra Política de privacidad se
                    aplica a cualquier Miembro.
                  </p>
                  <p>
                    Nuestros usuarios registrados («Miembros») comparten su
                    identidad profesional, interactúan con su red de contactos,
                    intercambian información y conocimientos profesionales,
                    publican y ven contenido relevante, adquieren y desarrollan
                    aptitudes, y encuentran oportunidades profesionales y de
                    negocio. El contenido y los datos de algunos de nuestros
                    Servicios están disponibles para personas que no son
                    miembros («Visitantes»).
                  </p>
                </div>
             
                <div className="iconStyle">   <h3> Servicios</h3>
                  <h3>
                    <RiToolsFill />
                  </h3>
                </div>
                <p>
                  <h4>
                    Esta Política de privacidad,se aplica al uso que realices de
                    nuestros Servicios.
                  </h4>
                  <div className="containerBackgrond">
                    <p>
                      <span>
                        <IoIosBulb />
                      </span>
                      Esta Política de privacidad se aplica a SkillHub.com, a
                      las aplicaciones de la marca SkillHub, a SkillHub Learning
                      y a otros sitios relacionados con SkillHub, a las
                      aplicaciones, comunicaciones y servicios («Servicios»),
                      incluidos los Servicios ofrecidos fuera del sitio web,
                      como nuestros servicios de publicidad y los complementos
                      (plugins) «Solicitar con SkillHub y «Compartir en
                      SkillHub», pero quedan excluidos los servicios que se
                      ofrecen en virtud de una política de privacidad diferente.
                      Para los residentes en California, nuestro Comunicado de
                      privacidad para California ofrece información adicional en
                      lo que concierne a las obligaciones impuestas por la
                      legislación de California.
                    </p>
                  </div>
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default PoliticaDePriv;
