import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
const ProductCard = ({ product }) => {
  return (
    <div className="foods-product-item">
      <div className="bg-[#dcdcdc] group rounded-tl-lg rounded-tr-lg relative">
        <img
          className="single-product-img bg-[#dcdcdc]"
          src={product?.images}
          alt=""
        />
        <div className="absolute scale-0 group-hover:scale-100 top-0 left-0 right-0 bottom-0 bg-imgColor flex justify-center items-center gap-3 duration-1000 transition-all rounded-tl-lg rounded-tr-lg">
          <div
            title="Hello world"
            className="text-xl px-2 py-1 bg-white rounded-md text-secondary hover:bg-secondary hover:text-white cursor-pointer"
          >
            <AiOutlineShoppingCart />
          </div>
          <div
            title="Hello world"
            className="text-xl px-2 py-1 bg-white rounded-md text-secondary hover:bg-secondary hover:text-white cursor-pointer"
          >
            <AiOutlineEye />
          </div>
          <div
            title="Hello world"
            className="text-xl px-2 py-1 bg-white rounded-md text-secondary hover:bg-secondary hover:text-white cursor-pointer"
          >
            <AiOutlineHeart />
          </div>
        </div>
      </div>
      <div className="product-content">
        <h3 className="single-product-title">{product?.title}</h3>
        <div className="price-btn-flex">
          <p className="card-price">${product?.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
