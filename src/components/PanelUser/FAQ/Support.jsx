import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../../toolkit/Users/usersHandler";
import { motion } from "framer-motion";
import Footer from "../../Footer/Footer";
import Nav from "../Nav";
import background from "../../../assets/backgroundImage.jpg";

const Support = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);
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
      <Nav />
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-sm z-[-1]"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className="flex-1 flex justify-center items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-lg shadow-lg p-8 w-[480px] max-w-[90%] mx-4 space-y-6"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Centro de Soporte
          </h2>
          <p className="text-gray-600">
            Bienvenido a nuestro centro de soporte. Nuestro equipo está aquí
            para ayudarte con cualquier pregunta o problema que puedas tener.
            Por favor, no dudes en contactarnos.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h3>
            <ul className="text-gray-700 space-y-2">
              <li>¿Cómo inicio sesión en mi cuenta?</li>
              <li>¿Cómo restablezco mi contraseña?</li>
              <li>¿Dónde puedo ver mis pedidos?</li>
              <li>¿Cómo contacto al servicio de atención al cliente?</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
            <p className="text-gray-600 mb-4">
              Si no encuentras la respuesta que necesitas, nuestro equipo de
              soporte está listo para ayudarte.
            </p>
            <a
              href="#contact"
              className="block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
            >
              Contactar Soporte
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
