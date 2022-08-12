import React from "react";
import { Footer, Header } from "./components/index.js";
import Router from "./Router/Router.jsx";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
