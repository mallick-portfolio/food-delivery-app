import React from "react";
import logo from "../../assets/logo.png";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  return (
    <header className="py-2 bg-white shadow-lg">
      <div className="container flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img className="w-12" src={logo} alt="" />
          <h4 className="text-sm font-bold">Tasty Treat</h4>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-6">
            <li className="font-semibold text-base cursor-pointer">Home</li>
            <li className="font-semibold text-base cursor-pointer">Foods</li>
            <li className="font-semibold text-base cursor-pointer">Cart</li>
            <li className="font-semibold text-base cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li className="relative">
              <RiShoppingBasketLine className="font-bold text-2xl" />
              <span className="absolute -top-2 w-5 text-white h-5 text-center -right-2 bg-red-500 rounded-full">0</span>
            </li>
            <li>
              <AiOutlineUser className="font-bold text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
