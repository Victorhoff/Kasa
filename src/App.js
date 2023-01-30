import "./sass/style.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Router from "./Router";

const App = () => {
  return (
    <>
      <Navigation />
      <Router />
      <Footer />
    </>
  );
};

export default App;
