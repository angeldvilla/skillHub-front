import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Score() {
  const [rating, setRating] = useState(0); 

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
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={`${
                rating >= ratingValue ? "text-yellow-500" : "text-gray-300"
              } cursor-pointer transition-colors duration-200`}
              size={40}
            />
          </label>
        );
      })}
    </div>
  );
}
