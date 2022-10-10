import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import auth from "../../firebase.init.js";
import { useAddToCartMutation } from "../../redux/api/cartApi.js";
import Loading from "../Loading/Loading.jsx";
import StarRatting from "../StarRatting/StarRatting.jsx";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product, setItem }) => {
  const navigate = useNavigate();
  const [addCart, res] = useAddToCartMutation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const addToCartHandler = async (product) => {
    if (!user?.email) {
      navigate("/login");
      return;
    }
    const result = await addCart({
      ...product,
      email: user?.email,
    });
    console.log(result);
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
            <AiOutlineEye onClick={() => setItem(product)} />
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
