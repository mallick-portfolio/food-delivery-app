import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="foods-product-item" key={product.id}>
      <img className="single-product-img" src={product?.images[0]} alt="" />
      <h3 className="single-product-title">{product?.title}</h3>
      <div className="flex justify-between items-center gap-6">
        <p className="font-semibold text-lg text-secondary">
          ${product?.price}
        </p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
