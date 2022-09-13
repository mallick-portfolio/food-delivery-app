import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import auth from "../../firebase.init.js";
import { useAddToCartMutation } from "../../redux/api/cartApi.js";
import StarRatting from "../StarRatting/StarRatting.jsx";
const ProductCard = ({ product }) => {
  const [addCart] = useAddToCartMutation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return "";
  }
  const addToCartHandler = async (product) => {
    if (user?.email) {
      console.log(product);
    }
  };

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
          <button
            onClick={() => addToCartHandler(product)}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
