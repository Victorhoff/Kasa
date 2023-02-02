import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import Host from "../components/Host";
import rentals from "../data/data.json";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const Accomodation = () => {
  const { rentalId } = useParams();
  const selectedRental = rentals.find((rental) => rental.id === rentalId);
  return (
    <>
      <Slider slides={selectedRental.pictures} />
      <div className="accomodation">
        <h1 className="accomodation__title">{selectedRental.title}</h1>
        <Host />
      </div>
      <h2 className="accomodation__location">{selectedRental.location}</h2>
      <Tags />
      <div className="collapse">
        <Collapse label="Description">
          <p>{selectedRental.description}</p>
        </Collapse>
        <Collapse label="Equipements">
          <ul className="collapse__dropdown__content">
            {selectedRental.equipments.map((equipments, index) => {
              return (
                <li key={index} className="collapse__dropdown__content__list">
                  {equipments}
                </li>
              );
            })}
          </ul>
        </Collapse>
      </div>
    </>
  );
};

export default Accomodation;
