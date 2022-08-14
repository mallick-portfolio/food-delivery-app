import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header } from "./components/index.js";
import Router from "./Router/Router.jsx";

const App = () => {
  const location = useLocation();
  return (
    <div className="w-full overflow-hidden">
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Header />
      )}
      <Router />
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Footer />
      )}
    </div>
  );
};

export default App;
