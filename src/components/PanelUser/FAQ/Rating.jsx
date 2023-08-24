import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../../toolkit/Users/usersHandler";
import { motion } from "framer-motion";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react";
import Footer from "../../Footer/Footer";
import Nav from "../Nav";
import background from "../../../assets/backgroundImage.jpg";
import Header from "../../Header/Header";
import { reviews } from "../../../toolkit/thunks";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {user,  userCredentials } = useSelector((state) => state.users);
  const [message, setMessage] = React.useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [scoreToSend, setScoreToSend] = useState({ score: 0 });
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (userCredentials !== null) {
      dispatch(getUser(id));
    }
  }, [dispatch, id, userCredentials]);
//console.log(user)

   
    const handleOpen = () => setOpen(!open);

    const handleSendClick2 = () => {
        if (message.trim() === "") {
          console.log("El mensaje está vacío");
          return;
        }
        try {
          dispatch(reviews(message));
          console.log(`Enviando puntuación: ${message}`);
        } catch (error) {
          console.error("Error al enviar la puntuación:", error);
        }
      };

      const handleMessageChange = (e) => {
        setMessage(e.target.value);
      };
      // SCORE ----
      const handleRatingClick = (ratingValue) => {
        if (ratingValue !== rating) {
          setRating(ratingValue);
          setScoreToSend({ score: ratingValue });
        } else {
          setRating(0);
          setScoreToSend({ score: 0 });
        }
      };
    
      const handleSendClick = () => {
        if (scoreToSend.score !== 0) {
          dispatch(reviews(scoreToSend));
          console.log(`Enviando puntuación: ${scoreToSend.score}`);
        }
      };

return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {userCredentials === null ? <Header /> : <Nav />}
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
            Centro de Calificaciones
          </h2>
          <p className="text-gray-600">
            ¡Hola {user?.firstName}! Nuestro equipo está aquí
            porque estamos interesados en conocer tu opinion a cerca de SkillHub. ¡Ayúdanos a mejorar! Selecciona una puntuación y envía tu calificación.
          </p>
            <div className="justify-center">
          <div className="flex flex-col gap-4">
      <div className="space-x-7 flex items-center">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label
              key={i}
              className="inline-block cursor-pointer transition-colors duration-200"
            >
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={ratingValue}
                onClick={() => handleRatingClick(ratingValue)}
              />
              <FaStar
                className={`${
                  (hover || rating) >= ratingValue
                    ? "text-yellow-500 animate-bounce"
                    : "text-gray-300"
                } cursor-pointer transition-colors duration-200`}
                size={40}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
          <button
            onClick={handleSendClick}
            className={
              `${scoreToSend.score === 0
                ? "bg-gray-500 text-white px-4 py-2 rounded-lg mt-10"
                : "bg-blue-500 text-white px-4 py-2 rounded-lg mt-10"
              } mb-10`
            }
            disabled={scoreToSend.score === 0}
          >
            Enviar
          </button>
      </div>
        {scoreToSend.score > 0 && rating > 0 && (
          <div className="text-center text-2xl mt-4">
            <p className="text-green-500 font-bold italic">¡Gracias por tu calificación!</p>
          </div>
        )}
        </div>
    </div>
          <p>Valoramos tus comentarios y queremos asegurarnos de que tu voz sea escuchada. Si tienes alguna opinión, sugerencia o simplemente deseas compartir tu experiencia, no dudes en escribir un mensaje. Tu retroalimentación es invaluable para nosotros y nos ayuda a mejorar continuamente.</p>
      <div className="flex justify-center">
       <Button className="margin-top: 200px" color="blue" onClick={handleOpen}>COMENTARIOS</Button>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>SKILLHUB</DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input label="Nombre" />
            <Textarea label="Comentarios" value={message} onChange={handleMessageChange} />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            cerrar
          </Button>
          <Button variant="gradient" color="blue" onClick={handleSendClick2}>
            enviar mensaje
          </Button>
        </DialogFooter>
      </Dialog>
          
        </motion.div>
      </div>
      <Footer />
    </div>
)

    }

export default Rating;