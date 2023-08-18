import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reviews } from "../../toolkit/thunks";

export default function Score() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [scoreToSend, setScoreToSend] = useState({ score: 0 });

  const dispatch = useDispatch();

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
    <div className="text-center">
      <h3 className="text-5xl font-semibold text-white mb-2 italic">
        Califica nuestro servicio
      </h3>
      <p className="text-gray-400 text-lg mb-6">
        ¡Ayúdanos a mejorar! Selecciona una puntuación y envía tu calificación.
      </p>
      <div className="space-x-10">
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
        {rating > 0 && (
          <p className="text-center text-2xl text-white mt-5">{rating}</p>
        )}
        <button
          onClick={handleSendClick}
          className={
            scoreToSend.score === 0
              ? "bg-gray-500 text-white px-4 py-2 rounded-lg mt-10"
              : "bg-blue-500 text-white px-4 py-2 rounded-lg mt-10"
          }
          disabled={scoreToSend.score === 0}
        >
          Enviar
        </button>
        {scoreToSend.score > 0 && rating > 0 && (
          <div className="text-center text-2xl mt-4">
            <p className="text-green-500 italic">¡Gracias por tu calificación!</p>
          </div>
        )}
      </div>
    </div>
  );
}
