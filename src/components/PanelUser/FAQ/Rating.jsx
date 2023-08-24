import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../../toolkit/Users/usersHandler";
import { motion } from "framer-motion";
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
          alert("Gracias por calificarnos")
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
      
          
        </motion.div>
      </div>
      <Footer />
    </div>
)

    }

export default Rating;