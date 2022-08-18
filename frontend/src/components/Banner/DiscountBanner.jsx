import React from "react";

const DiscountBanner = () => {
  return (
    <div className="container py-12 flex justify-between gap-8">
      <div className="w-1/2 bg-discountBg">
        <img
          className="rounded-2xl"
          src="https://i.ibb.co/HpRqcDc/05.png"
          alt=""
        />
      </div>
      <div className="w-1/2 bg-discountBg">
        <img
          className="rounded-2xl"
          src="https://i.ibb.co/JrbnDcf/06.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DiscountBanner;
