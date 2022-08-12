import React from "react";
import "swiper/css";
import network from "../../assets/network.png";
import people1 from "../../assets/people1.jpg";
import people2 from "../../assets/people2.jpg";
import people3 from "../../assets/people3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
const Testimonial = () => {
  return (
    <div className="container py-12 flex justify-between items-center gap-4">
      <div className="w-1/2">
        <h3 className="serve-subtitle">Testimonial</h3>
        <h2 className="tasty-title mt-4">
          What our <span className="text-secondary">customers</span> are saying
        </h2>
        <p className="tasty-des">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          quasi qui minus quos sit perspiciatis inventore quis provident placeat
          fugiat!
        </p>

        <Swiper
          loop={true}
          observeParents={true}
          autoplay={{
            duration: 2000,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonial.map((t) => (
            <SwiperSlide key={t.id}>
              <p className="tasty-des">{t.comment}</p>
              <div className="flex items-center gap-2">
                <img className="w-12 h-12 rounded-sm" src={t.image} alt="" />
                <h6 className="text-lg font-semibold">{t.name}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-1/2">
        <img src={network} alt="" />
      </div>
    </div>
  );
};

const testimonial = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!",
    name: "Jhon Doe",
    image: people1,
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!",
    name: "Mitchell Marsh",
    image: people2,
  },
  {
    id: 3,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!",
    name: "Steven Crock",
    image: people3,
  },
];
export default Testimonial;
