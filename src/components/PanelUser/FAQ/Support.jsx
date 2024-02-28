import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'

import { getUser } from '../../../toolkit/Users/usersHandler'
import Footer from '../../Footer/Footer'
import Nav from '../Nav'
import background from '../../../assets/backgroundImage.jpg'
import Header from '../../Header/Header'
function Support() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { userCredentials } = useSelector((state) => state.users)

  useEffect(() => {
    if (userCredentials !== null) {
      dispatch(getUser(id))
    }
  }, [dispatch, id, userCredentials])

  const [open, setOpen] = React.useState(1)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

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
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center blur-sm z-[-1]"
        style={{
          backgroundImage: `url(${background})`
        }}
      />
      <div className="flex-1 flex justify-center items-center py-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 w-[480px] max-w-[90%] mx-4 space-y-6"
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: -20 }}
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
              <Accordion open={open === 1}>
                <AccordionHeader
                  className="text-gray-500 space-y-2"
                  onClick={() => handleOpen(1)}
                >
                  ¿Cómo inicio sesión en mi cuenta?
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  Complete los campos con sus datos personales o inicie sesión
                  con Google.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  className="text-gray-500"
                  onClick={() => handleOpen(2)}
                >
                  ¿Dónde puedo ver mis pedidos?
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  Una vez que inicies sesión, en el margen superior derecho
                  tendrás acceso a 'Mis Servicios', donde podrás ver tus
                  publicaciones y la cantidad de publicaciones disponibles según
                  tu plan.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader
                  className="text-gray-500"
                  onClick={() => handleOpen(3)}
                >
                  ¿Cómo contacto al servicio de atención al cliente?
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  Dirígete a Contactanos y podrás enviar un correo a nuestro
                  correo general de SkillHub.
                </AccordionBody>
              </Accordion>
            </ul>
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Si no encuentras la respuesta que necesitas, nuestro equipo de
              soporte está listo para ayudarte.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Support
