import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import rentals from "../data/data.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="gallery">
        {rentals.map((rental) => (
          <article key={rental.id}>
            <Link to={`/rental/${rental.id}`}>
              <Cards image={rental.cover} title={rental.title} />
            </Link>
          </article>
        ))}
        ;
      </main>
    </>
  );
};

export default Home;
