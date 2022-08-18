import React from "react";
import logo from "../../assets/logo.png";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading.jsx";
import Cart from "../Cart/Cart.jsx";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [show, setShow] = useState(true);
  const [showCart, setShowCart] = useState(false);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
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
              <div
                className="cursor-pointer"
                onClick={() => setShowCart(!showCart)}
              >
                <RiShoppingBasketLine className="right-navbar-item" />
                <span className="cart-item">0</span>
              </div>
              <div
                className={`cart-items ${
                  showCart ? " top-6 right-0" : "-top-96 right-0"
                }`}
              >
                <Cart />
              </div>
            </li>
            {user ? (
              <li>
                <button onClick={() => signOut(auth)}>Logout</button>
              </li>
            ) : (
              <li cl>
                <Link to={"/login"}>
                  <FiLogIn className="right-navbar-item" />
                </Link>
              </li>
            )}

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
