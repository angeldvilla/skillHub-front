import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../../toolkit/Users/usersHandler";
import { motion } from "framer-motion";
import Footer from "../../Footer/Footer";
import Nav from "../Nav";
import background from "../../../assets/backgroundImage.jpg";
import Header from "../../Header/Header";

const Help = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { userCredentials } = useSelector((state) => state.users);

  useEffect(() => {
    if (userCredentials !== null) {
      dispatch(getUser(id));
    }
  }, [dispatch, id, userCredentials]);
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
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
      {userCredentials === null ? <Header /> : <Nav />}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur brightness-50 z-[-1]"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="flex-1 flex justify-center items-center py-10">
        <div className="bg-white rounded-lg shadow-md w-3/6 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Centro de Ayuda</h2>
            <p className="text-gray-600">
              ¡Bienvenido a nuestro Centro de Ayuda! Aquí encontrarás
              información útil, consejos y recursos para aprovechar al máximo
              nuestros servicios. Explora nuestras guías y soluciones para
              resolver tus dudas y mejorar tu experiencia.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Planes de Suscripción
            </h3>
            <p className="text-gray-600">
              Si estás interesado en nuestros servicios premium, consulta
              nuestros planes de suscripción. Descubre las características y
              beneficios exclusivos que cada plan ofrece para elegir el mejor
              para ti.
            </p>
            <a
              href={
                userCredentials === null
                  ? "/memberShip"
                  : `/user-panel/${id}/memberShip`
              }
              className="text-blue-500 hover:underline"
            >
              Ver Planes de Suscripción
            </a>
          </div>
    
          <div>
            <h3 className="text-lg font-semibold mb-2">
              ¿Necesitas Ayuda Personalizada?
            </h3>
            <p className="text-gray-600 mb-4">
              Si tus preguntas no se responden en nuestras guías, estamos aquí
              para ayudarte de manera personalizada. No dudes en contactarnos
              para obtener la asistencia que necesitas.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
