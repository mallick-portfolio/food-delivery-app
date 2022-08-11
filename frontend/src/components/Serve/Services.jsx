import React from "react";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
const SingleService = () => {
  return (
    <div className="serve-grid">
      {services.map((service) => (
        <div key={service.id} className="single-serve">
          <img className="w-1/4 mx-auto" src={service.image} alt="" />
          <h4 className="single-serve-title">{service.title}</h4>
          <p className="text-sm sm:text-base">{service.des}</p>
        </div>
      ))}
    </div>
  );
};

const services = [
  {
    id: 1,
    title: "Quick Delivery",
    image: ser1,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    id: 2,
    title: "Super Dine In",
    image: ser2,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    id: 3,
    title: "Easy Pick Up",
    image: ser3,
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];
export default SingleService;
