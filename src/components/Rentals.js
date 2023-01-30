import React from "react";
import { useParams } from "react-router-dom";
import rentals from "../data/data.json";

const Rentals = () => {
  const rentalId = useParams();
  const rental = rentals.find((rental) => rental.id === rentalId);
  const {
    title,
    pictures,
    descritpion,
    host,
    rating,
    location,
    equipments,
    tags,
  } = rental;

  return (
    <div>
      <div className="carrousel">
        <img className="carrousel__img" src="" alt="" />
        <div className="rental__info">
          <h1 className="rental__info__title">{title}</h1>
          <h3 className="rental__info__subtitle">{location}</h3>
          <div className="rental__info__tags">{tags}</div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
