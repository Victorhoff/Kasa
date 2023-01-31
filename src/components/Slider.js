import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  if (slides.length > 1) {
    return (
      <section className="slider">
        <img
          src="/img/leftArrow.png"
          alt="Flèche gauche"
          className="leftArrow"
          onClick={prevSlide}
        />
        <img
          src="/img/rightArrow.png"
          alt="Flèche droite"
          className="rightArrow"
          onClick={nextSlide}
        />
        {slides.map((slides, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  key={index}
                  src={slides}
                  alt="Photo du logement"
                  className="slider__image"
                />
              )}
            </div>
          );
        })}
      </section>
    );
  }

  return (
    <section className="slider">
      {slides.map((slides, index) => {
        return (
          <div className="slide active">
            <img
              src={slides}
              alt="Photo du logement"
              className="slider__image"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
