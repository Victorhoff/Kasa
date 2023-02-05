import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import Host from "../components/Host";
import rentals from "../data/data.json";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import Stars from "../components/Stars";
import Error from "./Error";

const Accomodation = () => {
  const { rentalId } = useParams();
  const selectedRental = rentals.find((rental) => rental.id === rentalId);

  if (!selectedRental) {
    return <Error />;
  }

  return (
    <main>
      <Slider slides={selectedRental.pictures} />
      <div className="accomodation">
        <h1 className="accomodation__title">{selectedRental.title}</h1>
        <Host host={selectedRental.host} />
      </div>
      <h2 className="accomodation__location">{selectedRental.location}</h2>
      <div className="rating__tags__container">
        <Tags tags={selectedRental.tags} />
        <Stars rating={selectedRental.rating} />
      </div>
      <div className="collapse">
        <div className="collapse__dropdown">
          <Collapse label="Description">
            <p>{selectedRental.description}</p>
          </Collapse>
        </div>
        <div className="collapse__dropdown">
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
      </div>
    </main>
  );
};

export default Accomodation;
