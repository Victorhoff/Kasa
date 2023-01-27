import React from "react";
import rentals from "../data/data.json";
import Cards from "../components/Cards";

const Gallery = () => {
  return (
    <main className="gallery">
      {rentals.map((rental) => (
        <article key={rental.id}>
          <Cards image={rental.cover} title={rental.title} />
        </article>
      ))}
      ;
    </main>
  );
};

export default Gallery;
