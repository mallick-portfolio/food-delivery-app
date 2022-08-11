import React from "react";
import { AiFillCar, AiFillSafetyCertificate } from "react-icons/ai";
import hero from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <h2 className="banner-subtitle">Easy way to make an order</h2>
        <h1 className="banner-title">
          <span className="text-secondary">HUNGRY?</span> Just wait <br /> food
          at <span className="text-secondary">your door</span>
        </h1>
        <p className="banner-des">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
          delectus tenetur autem, sint veritatis!
        </p>
        <div className="flex items-center justify-center sm:justify-start mt-4 gap-8">
          <button className="order-btn">Order Now</button>
          <button className="foods-btn">See All Foods</button>
        </div>
        <div className="banner-trust">
          <div className="trust-flex">
            <span className="trust-icon">
              <AiFillCar />
            </span>
            <span className="trust-content">No shipping charge</span>
          </div>
          <div className="trust-flex">
            <span className="trust-icon">
              <AiFillSafetyCertificate />
            </span>
            <span className="trust-content">100% secure checkout</span>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
