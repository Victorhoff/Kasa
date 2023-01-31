import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  return (
    <>
      {slides.map((slides, index) => {
        if (slides.length > 0) {
          return <img key={index} src={slides} alt="Photo du logement" />;
        }
      })}
    </>
  );
};

export default Slider;
