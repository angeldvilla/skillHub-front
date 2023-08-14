import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reviews } from "../../toolkit/thunks";
export default function Score() {
  const [rating, setRating] = useState(0); 
  const [hover, setHover ] = useState(null)
  const [scoreToSend, setScoreToSend] = useState({score: 0}); 
   
  const dispatch = useDispatch()

    const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    setScoreToSend({score: ratingValue}); 
  }

    const handleSendClick = () => {
    if (scoreToSend.score !== null) {
      dispatch(reviews(scoreToSend))
   
      console.log(`Enviando puntuación: ${scoreToSend}`);
    }
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} className="inline-block cursor-pointer transition-colors duration-200">
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() =>handleRatingClick(ratingValue)} 
            />
            <FaStar
              className={`${
              ( hover || rating) >= ratingValue ? "text-yellow-500" : "text-gray-300"
              } cursor-pointer transition-colors duration-200`}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}

            />
          </label>
        );
      })}
      {scoreToSend.score > 0 && (
        <button
          onClick={handleSendClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Enviar
        </button>
      )}
    </div>
  );
}
