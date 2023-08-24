import axios from "axios";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Card } from "@material-tailwind/react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await axios(
          "https://skillhub-back-production.up.railway.app/reviews"
        );
        setReviews(data);
      } catch (error) {
        console.error("Error al obtener las calificaciones:", error);
      }
    };
    getReviews();
  }, []);

  // promedio de calificaciones
  const totalScores = reviews.reduce((sum, review) => sum + review.score, 0);
  const averageScore = totalScores / reviews.length;

  return (
    <div className="px-4 py-32 flex">
      <div className="w-1/4 mr-32">
        <h2 className="text-2xl font-bold mb-2">Promedio de Calificaciones</h2>
        <div className="flex items-center space-x-1">
          {Array.from({ length: Math.floor(averageScore) }).map((index) => (
            <FaStar key={index} className="text-yellow-500 text-xl" />
          ))}
        </div>
        <p className="text-lg mt-2">Promedio: {averageScore.toFixed(2)}</p>
      </div>

      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">Calificaciones Recientes</h2>
        <div className="max-h-96 overflow-y-auto">
          {reviews.map((review) => (
            <Card key={review._id} className="p-4 bg-gray-900">
              <div className="flex items-center space-x-1">
                {Array.from({ length: review.score }).map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-lg" />
                ))}
              </div>
              <p className="text-md text-white mt-2">{review.message}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;