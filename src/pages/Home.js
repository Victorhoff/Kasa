import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import rentals from "../data/data.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner
        backgroundImg={"/img/banner.png"}
        bannerTitle={"Chez vous, partout et ailleurs"}
      />
      <main className="gallery">
        {rentals.map((rental) => (
          <article key={rental.id} className="gallery__card">
            <Link to={`/rental/${rental.id}`}>
              <Cards image={rental.cover} title={rental.title} />
            </Link>
          </article>
        ))}
      </main>
    </>
  );
};

export default Home;
