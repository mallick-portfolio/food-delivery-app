import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header } from "./components/index.js";
import Router from "./Router/Router.jsx";

const App = () => {
  const location = useLocation();
  return (
    <div className="w-full overflow-hidden">
      {location.pathname !== "/register" && <Header />}
      <Router />
      {location.pathname !== "/register" && <Footer />}
    </div>
  );
};

export default App;
