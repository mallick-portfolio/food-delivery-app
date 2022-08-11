import React from "react";
import logo from "../../assets/logo.png";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <header className="py-1 sm:py-2 bg-white shadow-lg">
      <div className="container flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img className="w-12" src={logo} alt="" />
          <h4 className="text-sm font-bold">Tasty Treat</h4>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-6">{menus}</ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`block lg:hidden absolute w-1/3 md:w-1/4 mt-auto bg-white shadow-2xl z-30 top-0 bottom-0 transition-all duration-500 ${
            show ? "-left-64" : "left-0"
          }`}
        >
          <ul className="flex items-center mt-8 gap-4 flex-col">{menus}</ul>
        </div>

        <div>
          <ul className="flex items-center gap-6">
            <li className="relative">
              <RiShoppingBasketLine className="font-bold text-2xl" />
              <span className="absolute -top-2 w-5 text-white h-5 text-center -right-2 bg-red-500 rounded-full">
                0
              </span>
            </li>
            <li>
              <AiOutlineUser className="font-bold text-2xl" />
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

const menus = (
  <>
    <li className="font-semibold text-base cursor-pointer">Home</li>
    <li className="font-semibold text-base cursor-pointer">Foods</li>
    <li className="font-semibold text-base cursor-pointer">Cart</li>
    <li className="font-semibold text-base cursor-pointer">Contact</li>
  </>
);

export default Header;
