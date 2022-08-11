import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <div className="logo-area justify-start">
          <img className="w-12" src={logo} alt="" />
          <h4 className="text-sm font-bold">Tasty Treat</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
