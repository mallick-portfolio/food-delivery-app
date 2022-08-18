import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import logo from "../../assets/logo.png";
const Cart = () => {
  return (
    <div className="cart-flex">
      <div>
        <img className="w-12 rounded-full object-fill" src={logo} alt="" />
        <h1>Hello world</h1>
      </div>
      <div className="flex items-center">
        <span className="cart-in-de">–</span>
        <input readOnly className="cart-input" type="text" value="1" />
        <span className="cart-in-de">+</span>
      </div>
      <div>
        <h5>Price</h5>
        <p>$50</p>
      </div>
      <div className="cart-item-delete">
        <AiTwotoneDelete className="cart-item-icon" />
      </div>
    </div>
  );
};

export default Cart;
