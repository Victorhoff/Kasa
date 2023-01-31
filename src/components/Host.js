import React from "react";
import rentals from "../data/data.json";
import { useParams } from "react-router-dom";

const Host = () => {
  const { rentalId } = useParams();
  const selectedRental = rentals.find((rental) => rental.id === rentalId);
  return (
    <div className="accomodation__host">
      <h3 className="accomodation__host__name">{selectedRental.host.name}</h3>
      <img
        className="accomodation__host__image"
        src={selectedRental.host.picture}
        alt="Photo du propriétaire"
      />
    </div>
  );
};

export default Host;
