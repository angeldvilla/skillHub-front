import Atras from "./Atras"
import { Link } from "react-scroll";
import Header from "../Header/Header"
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import {useState, useEffect} from "react";
import {
  RiDraftFill,
  RiFileList3Line,
  RiHandCoinLine,
  RiCheckboxMultipleLine,
  RiUserUnfollowFill,
  RiOpenArmFill,
  RiEmotionUnhappyLine,
} from "react-icons/ri";
import Footer from "../Footer/Footer";
const CondicionesDeUso = () => {
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
    <div className="containerCondUso">
     
      <Header/>
      <div className="positionButon"> 
      <Atras/>
     
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        </div>
     
    
      
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="iconCondicionesDeUso">
                  <RiDraftFill />
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Condiciones de uso
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Nuestro objetivo es conectar a profesionales de todo el mundo
                  para ayudarles a ser más productivos y a alcanzar sus metas
                  laborales. Nuestros servicios han sido diseñados para promover
                  oportunidades económicas para nuestros miembros al permitir
                  que tú y millones de profesionales os conozcáis, intercambiéis
                  ideas, aprendáis y encontréis oportunidades o empleados,
                  trabajéis y toméis decisiones en una red de relaciones de
                  confianza.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <div className="museStyle">
                  <p>
                    <h1>
                      <strong>ÍNDICE: </strong>
                    </h1>

                    <Link
                      activeClass="active"
                      to="introduccion"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={4000}
                    >
                      <h3> 1.Introducción</h3>
                    </Link>
                    <Link
                      activeClass="active"
                      to="Obligaciones"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={4000}
                    >
                      <h3>2.Obligaciones</h3>
                    </Link>

                    <Link
                      activeClass="active"
                      to="Derechos"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={4000}
                    >
                      <h3>3.Derechos y limitaciones</h3>
                    </Link>
                    <Link
                      activeClass="active"
                      to="Quejas"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={4000}
                    >
                      <h3>4.Quejas relativas al contenido</h3>
                    </Link>

                    <Link
                      to="Contactarnos"
                      className="test6"
                      spy={true}
                      smooth={true}
                      duration={5000}
                    >
                      <h3>5. Contactarnos</h3>
                    </Link>
                  </p>
                </div>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <RiFileList3Line
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Contrato:
                      </strong>
                      <div id="introduccion">
                        1. Cuando utilizas nuestros Servicios aceptas cumplir
                        todos estos términos. Tu uso de nuestros Servicios
                        también está sujeto a nuestra Política de privacidad, que abarca el modo en
                        que recabamos, utilizamos, compartimos y almacenamos tu
                        información personal.
                      </div>
                      <div className="titleServCliente">
                        <h1>
                          Servicios del cliente <RiHandCoinLine />
                        </h1>
                        <p>
                          Este Contrato se aplica a SkillHub.com, a las
                          aplicaciones de la marca de SkillHub, a SkillHub
                          Learning y a otros sitios relacionados con SkillHub,
                          aplicaciones, comunicaciones y otros servicios que
                          declaran que se ofrecen en virtud de este Contrato
                          («Servicios»), incluida la recopilación de datos al
                          margen del sitio web para esos Servicios, como
                          nuestros anuncios y los complementos «Solicitar con
                          SkillHub y «Compartir con SkillHub. Los usuarios
                          suscritos a nuestros Servicios son «Miembros» y los
                          usuarios no registrados son «Visitantes».
                        </p>
                      </div>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <RiCheckboxMultipleLine
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <div id="Obligaciones">
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Obligaciones:
                        </strong>
                      </span>

                      <p>
                        <h1>
                          Cumples los requisitos para suscribir este Contrato y
                          tienes al menos la «Edad mínima» establecida. Los
                          menores de 16 años no pueden usar los Servicios.
                        </h1>
                        <h1>
                          Cumples los requisitos para suscribir este Contrato y
                          tienes al menos la «Edad mínima» establecida.
                        </h1>
                        Los menores de 16 años no pueden usar los Servicios.
                        Para utilizar los Servicios, aceptas que:
                        <div>
                          (1) tienes al menos la «Edad mínima» (definida a
                          continuación);
                        </div>
                        <div>
                          (2) solo tendrás una cuenta de SKILLHUB, que deberá
                          estar a tu nombre real; y
                        </div>
                        <div>
                          (3) SKILLHUB no te ha restringido el uso de los
                          Servicios. La creación de una cuenta con información
                          falsa constituye una infracción de nuestros Términos;
                          esto se aplica también a las cuentas registradas en
                          nombre de otras personas o usadas por menores de 16
                          años. «Edad mínima» significa 16 años. No obstante, si
                          la legislación aplicable exige que debes tener más
                          edad para que SKILLHUB te proporcione lícitamente los
                          Servicios sin consentimiento de tus padres (incluido
                          el uso de tus datos personales), entonces la Edad
                          mínima será esa otra edad.
                        </div>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <RiUserUnfollowFill
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Derechos y limitaciones
                      </strong>
                    </span>

                    <p>
                      <div id="Derechos">
                        <h1> Tu licencia respecto a SkillHub: </h1>
                      </div>
                      <div>
                        Eres el propietario de todo el contenido, los
                        comentarios y los datos personales que nos proporciones,
                        pero también nos otorgas una licencia no exclusiva en lo
                        que concierne a dicha información.
                      </div>
                      <div>
                        Puedes finalizar esta licencia para un contenido
                        específico borrando dicho contenido de los Servicios, o
                        en general cerrando tu cuenta, salvo
                        <div>
                          (a) en la medida en que lo hayas compartido con otras
                          personas como parte del Servicio y estas a su vez lo
                          hayan copiado, vuelto a compartir o almacenado y
                        </div>
                        <div>
                          (b) durante el tiempo razonable que se tarde en
                          retirarlo de las copias de seguridad y de otros
                          sistemas.
                        </div>
                      </div>
                    </p>
                  </li>
                  {showScrollButton && (
          <button
            className="fixed bottom-10 right-6 bg-gray-900/75 hover:bg-gray-900 text-white py-4 px-3 rounded-lg z-100"
            onClick={scrollToTop}
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        )}
                  <li className="flex gap-x-3">
                    <RiEmotionUnhappyLine
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <div id="Quejas">
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Quejas relativas al contenido.
                        </strong>
                        Información de contacto para quejas sobre el contenido
                        proporcionado por nuestros Miembros. Aceptas que no vas
                        a: Crear una identidad falsa en SKILLHUB, falsificar tu
                        identidad, crear un perfil de Miembro para alguien que
                        no seas tú (una persona física), ni usar o intentar usar
                        la cuenta de otra persona. Desarrollar, apoyar o
                        utilizar programas, dispositivos, scripts, robots o
                        cualquier otro medio o proceso (incluidos crawlers,
                        plugins de navegación y complementos, o cualquier otra
                        tecnología) para plagiar los Servicios o copiar de otro
                        modo perfiles u otros datos de los Servicios. Eludir
                        cualquier funcionalidad de seguridad o sortear cualquier
                        control de acceso o los límites de uso del Servicio
                        (como límites en las búsquedas de palabras clave o
                        visualizaciones del perfil). Copiar, utilizar, divulgar
                        o distribuir cualquier información obtenida de los
                        Servicios, ya sea de forma directa o a través de
                        terceros (como los motores de búsqueda), sin el
                        consentimiento de SKILLHUB. Revelar información que no
                        tienes derecho a compartir (como información
                        confidencial de terceros, incluida tu empresa).
                        Infringir los derechos de propiedad intelectual de
                        terceros, como derechos de autor, patentes, marcas,
                        secretos comerciales u otros derechos de propiedad. Por
                        ejemplo, no copies ni distribuyas (salvo a través de la
                        funcionalidad de compartir disponible) las publicaciones
                        u otros tipos de contenido de otras personas sin su
                        permiso, el cual se puede otorgar publicando a través de
                        una licencia de Creative Commons. Infringir la propiedad
                        intelectual u otros derechos de SKILLHUB, incluido, sin
                        limitación, (i) copiar o distribuir nuestros vídeos de
                        aprendizaje u otros materiales; o (ii) copiar o
                        distribuir nuestra tecnología, salvo que se ponga en
                        circulación con licencias de código abierto; (iii)
                        utilizar el término «LinkedIn» o nuestros logotipos en
                        cualquier nombre comercial, email o URL excepto en los
                        casos descritos en las Directrices de marca. Publicar
                        cualquier cosa que contenga virus informáticos, gusanos
                        o cualquier otro código dañino. Utilizar técnicas de
                        ingeniería inversa, descompilar, desarmar, descifrar o
                        de otro modo tratar de obtener el código fuente de los
                        Servicios o de cualquier tecnología relacionada que no
                        sea de código abierto. Dar a entender o declarar que
                        estás asociado o avalado por SKILLHUB sin nuestro
                        consentimiento expreso (por ejemplo, presentarte como
                        formador acreditado de SKILLHUB). Alquilar, prestar,
                        comercializar, vender/revender u obtener cualquier otro
                        tipo de beneficio de los Servicios o datos relacionados,
                        ni acceder a los mismos sin el consentimiento de
                        SKILLHUB. Establecer enlaces a nuestros Servicios para
                        cualquier otra finalidad que la de promover tu perfil o
                        un grupo en nuestros Servicios, sin el consentimiento de
                        SKILLHUB. Utilizar bots u otros métodos automatizados
                        para acceder a los Servicios, para añadir o descargar
                        contactos o para enviar o redirigir mensajes. Controlar
                        la disponibilidad, el rendimiento o el funcionamiento de
                        los Servicios con fines competitivos. Llevar a cabo
                        prácticas de «framing» o «mirroring», o simular de otro
                        modo la apariencia o función de los Servicios.
                        Superponer o modificar de cualquier otro modo los
                        Servicios o su apariencia (como, por ejemplo, insertando
                        elementos en los Servicios o eliminando, tapando o
                        disimulando anuncios incluidos en los Servicios).
                        Interferir en el funcionamiento o cargar los Servicios
                        de manera poco razonable (por ejemplo, spam, ataques de
                        denegación de servicio, virus o algoritmos de juego).
                      </span>
                    </div>
                  </li>
                </ul>
                <p className="mt-8">
                  Respetamos los derechos de propiedad intelectual de otras
                  personas. Exigimos que la información publicada por los
                  miembros sea exacta y que no infrinja los derechos de
                  propiedad intelectual u otros derechos de terceros. Tenemos
                  una política y un procedimiento para presentar quejas sobre el
                  contenido publicado por nuestros Miembros.
                </p>

                <div id="Contactarnos">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Cómo contactarnos <RiOpenArmFill />
                  </h2>
                </div>
                <p className="mt-6">
                  <div> Nuestra información de contacto:</div>
                  <div>
                    Nuestro Centro de ayuda también facilita información sobre
                    nuestros Servicios. Para consultas de tipo general, puedes
                    ponerte en contacto con nosotros en línea. Si deseas recibir
                    avisos legales o notificaciones judiciales, puedes
                    escribirnos a estas direcciones.
                  </div>
                </p>
           
              </div>
            </div>
          </div>
        </div>
       
      </div> 
       
       
      <Footer />
    </div>
  );
};
export default CondicionesDeUso;
