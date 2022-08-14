import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
 
  const [show, setShow] = useState(true);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-area">
          <img className="w-12" src={logo} alt="" />
          <h4 className="text-sm font-bold">Tasty Treat</h4>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="desktop-menu">
            {menus.map((item, i) => (
              <li key={i} className="list-item">
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${show ? "-left-64" : "left-0"}`}>
          <ul className="mobile-ul">
            {menus.map((item, i) => (
              <li key={i} className="list-item">
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="right-navbar">
            <li className="relative">
              <RiShoppingBasketLine className="right-navbar-item" />
              <span className="cart-item">0</span>
            </li>
            <li>
              <Link to={"/register"}>
                <AiOutlineUser className="right-navbar-item" />
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <AiOutlineUser className="right-navbar-item" />
              </Link>
            </li>
            <li className="block lg:hidden">
              <button onClick={() => setShow(!show)}>
                {show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const menus = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/all-foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

export default Header;
