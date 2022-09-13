import React, { useEffect } from "react";
import StarRatting from "../StarRatting/StarRatting.jsx";
const FoodModal = ({ item, setItem }) => {
  console.log(item);
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [item]);
  return (
    <div>
      <div className="flex justify-center items-center h-full md:h-screen fixed top-0 left-0 bg-transparent right-0 bottom-0 w-full z-50 md:overflow-hidden overscroll-auto">
        <div className="w-full lg:w-2/3 bg-white shadow-2xl border border-secondary p-8 rounded-lg">
          <div className="flex flex-col justify-center items-center md:flex-row gap-4 bg-white px-4 rounded-lg shadow-3xl py-3">
            <img className="w-1/2 mx-auto md:mx-0" src={item?.images} alt="" />
            <div className="text-center md:text-start">
              <h2 className="text-primary font-semibold text-xl">
                {item?.title}
              </h2>

              <h2 className="text-primary font-semibold text-lg">
                <span className="text-secondary">${item?.price}</span>
              </h2>
              <h2 className="text-primary font-semibold text-lg">
                Price ----------->
                <span className="text-secondary">${item?.price}</span>
              </h2>
              <h2 className="text-primary font-semibold text-lg">
                Category ------->
                <span className="text-secondary">{item?.category}</span>
              </h2>

              <p className="text-sm font-medium pt-3">{item?.desc}</p>
            </div>
          </div>
          <div className="flex gap-5 flex-col-reverse md:flex-row justify-between items-center py-3">
            <button className="foods-btn" onClick={() => setItem(null)}>
              Close
            </button>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
