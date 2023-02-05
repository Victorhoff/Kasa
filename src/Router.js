import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import About from "./pages/About";
import Error from "./pages/Error";
import React, { useState } from "react";
import rentals from "./data/data.json";

const Router = () => {
  const [notFound, setNotFound] = useState(false);
  const rentalIds = [];
  const pushIds = rentals.forEach((rental) => {
    rentalIds.push(rental.id);
  });
  return (
    <>
      {notFound ? (
        <Error />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/rental/:rentalId" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
