/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  const carouselContainerStyles = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const imageStyles = {
    maxHeight: "400px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "0.5rem",
  };

  const arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "0.5rem",
    padding: "0.8rem",
    color: "#fff",
  };

  return (
    <div style={carouselContainerStyles}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: "15px" }}
            >
              &#9664;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: "15px" }}
            >
              &#9654;
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={imageStyles} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
