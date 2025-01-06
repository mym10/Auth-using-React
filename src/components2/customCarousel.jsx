import React, { useState } from "react";

const CustomCarousel = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-play effect
  React.useEffect(() => {
    const interval = setInterval(goToNextSlide, autoPlayInterval);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex, autoPlayInterval]);

  return (
    <div className="custom-carousel">
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <iframe
              src={slide.src}
              title={`Slide ${index + 1}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={goToPrevSlide}>
        &#9664;
      </button>
      <button className="next-btn" onClick={goToNextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default CustomCarousel;
