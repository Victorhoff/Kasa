import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import About from "./pages/About";
import Error from "./pages/Error";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/rental/:rentalId" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
