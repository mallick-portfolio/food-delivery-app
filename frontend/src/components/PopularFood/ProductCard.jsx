import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import StarRatting from "../StarRatting/StarRatting.jsx";
const ProductCard = ({ product }) => {
  return (
    <div className="foods-product-item">
      <div className="product-img-div group">
        <img className="single-product-img " src={product?.images} alt="" />
        <div className="product-hover-content">
          <div className="product-hover-icon">
            <AiOutlineShoppingCart />
          </div>
          <div className="product-hover-icon">
            <AiOutlineEye />
          </div>
          <div className="product-hover-icon">
            <AiOutlineHeart />
          </div>
        </div>
      </div>
      <div className="product-content">
        <h3 className="single-product-title">{product?.title}</h3>
        <StarRatting rating={product?.avgRatting} />
        <div className="price-btn-flex">
          <p className="card-price">${product?.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
