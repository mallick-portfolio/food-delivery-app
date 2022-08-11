import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md px-6 py-4 rounded-md" key={product.id}>
      <img
        className="w-1/2 cursor-pointer mx-auto scale-100 hover:scale-125 duration-500"
        src={product?.images[0]}
        alt=""
      />
      <h3 className="text-center text-lg font-semibold text-primary my-4">
        {product?.title}
      </h3>
      <div className="flex justify-between items-center gap-6">
        <p className="font-semibold text-lg text-secondary">
          ${product?.price}
        </p>
        <button className="bg-secondary text-base text-white px-2 py-1 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
