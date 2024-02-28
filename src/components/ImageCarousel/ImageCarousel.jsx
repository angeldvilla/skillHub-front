/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function ImageCarousel({ images }) {
  const carouselContainerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 20px'
  }

  const imageStyles = {
    maxHeight: '400px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '0.5rem'
  }

  const arrowStyles = {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '0.5rem',
    padding: '0.8rem',
    color: '#fff'
  }

  return (
    <div style={carouselContainerStyles}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        stopOnHover
        interval={3000}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              style={{ ...arrowStyles, right: '15px' }}
              title={label}
              type="button"
              onClick={onClickHandler}
            >
              &#9654;
            </button>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              style={{ ...arrowStyles, left: '15px' }}
              title={label}
              type="button"
              onClick={onClickHandler}
            >
              &#9664;
            </button>
          )
        }
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img alt={`Slide ${index + 1}`} src={image} style={imageStyles} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
