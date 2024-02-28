/* eslint-disable react/prop-types */
import { Carousel, IconButton } from '@material-tailwind/react'

export function MaterialCarousel({ images }) {
  return (
    <Carousel
      className="rounded-xl"
      nextArrow={({ handleNext }) => (
        <IconButton
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
          color="white"
          size="lg"
          variant="text"
          onClick={handleNext}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          className="!absolute top-2/4 left-4 -translate-y-2/4"
          color="white"
          size="lg"
          variant="text"
          onClick={handlePrev}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      )}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            alt={`Slide ${index + 1}`}
            className="w-[635px] h-[400px] rounded-md"
            src={image}
          />
        </div>
      ))}
    </Carousel>
  )
}
