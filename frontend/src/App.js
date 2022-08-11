import React from "react";
import { Footer, Header } from "./components/index.js";
import Router from "./Router/Router.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
