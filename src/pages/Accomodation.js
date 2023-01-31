import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import rentals from "../data/data.json";

const Accomodation = () => {
  const { rentalId } = useParams();
  const selectedRental = rentals.find((rental) => rental.id === rentalId);
  return (
    <>
      <Slider slides={selectedRental.pictures} />
    </>
  );
};

export default Accomodation;
