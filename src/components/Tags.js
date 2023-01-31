import React from "react";
import rentals from "../data/data.json";
import { useParams } from "react-router-dom";

const Tags = () => {
  const { rentalId } = useParams();
  const selectedRental = rentals.find((rental) => rental.id === rentalId);
  return (
    <ul className="tags__container">
      {selectedRental.tags.map((tags, index) => {
        return (
          <li key={index} className="tags__list">
            {tags}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
