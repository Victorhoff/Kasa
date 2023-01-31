import React from "react";

const Cards = (props) => {
  return (
    <div className="gallery__card">
      <img src={props.image} alt="" className="gallery__card__img" />
      <div className="gallery__card__overlay"></div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Cards;
