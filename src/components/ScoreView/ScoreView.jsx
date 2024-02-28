import { FaStar } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Scoreview() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null)
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      const response = await axios.get(
        'https://skillhub-back-production.up.railway.app/reviews'
      )

      return response.data
    } catch (error) {
      console.error('Error al obtener las reseñas:', error)
      throw error
    }
  }

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews()

        setReviews(reviewsData)

        // Calculate the average score
        const scores = reviewsData.map((review) => review.score)
        const averageScore =
          scores.reduce((sum, score) => sum + score, 0) / scores.length

        setRating(averageScore) // Update the rating state
      } catch (error) {
        // Handle errors if necessary
      }
    }

    fetchReviews()
  }, [])

  console.log(rating)

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-5xl font-semibold text-white mb-2 italic">
        Explora nuestro impacto: ¡Descubre nuestras calificaciones!
      </h3>
      <p className="text-gray-400 text-lg mb-6">
        La voz de nuestros clientes habla por sí misma. ¡Echa un vistazo a las
        puntuaciones y experimenta la calidad que ofrecemos!
      </p>
      <div className="space-x-7 flex items-center">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          const isFilled = rating >= ratingValue
          const isHalfFilled =
            ratingValue - rating < 0.5 && ratingValue - rating > 0

          return (
            <FaStar
              key={i}
              className={`${
                isFilled ? 'text-yellow-500 animate-bounce' : 'text-gray-300'
              } ${isHalfFilled ? 'text-yellow-500' : ''}  transition-colors duration-200`}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          )
        })}
      </div>
      {rating > 0 && (
        <div className="text-center text-2xl mt-4">
          <p className="text-green-500 font-bold italic">
            ¡Encuentra tus prospectos!
          </p>
        </div>
      )}
    </div>
  )
}
