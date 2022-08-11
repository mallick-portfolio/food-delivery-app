import React from "react";
import network from "../../assets/network.png";
const Testimonial = () => {
  return (
    <div className="container py-12 flex justify-between items-center gap-4">
      <div className="w-1/2">
        <h2 className="tasty-title">
          What our <span className="text-secondary">customers</span> are saying
        </h2>
        <p className="tasty-des">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          quasi qui minus quos sit perspiciatis inventore quis provident placeat
          fugiat!
        </p>
      </div>
      <div className="w-1/2">
        <img src={network} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
