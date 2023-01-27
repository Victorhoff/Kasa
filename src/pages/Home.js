import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
