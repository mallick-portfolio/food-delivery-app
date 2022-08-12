import React from "react";
import products from "../../assets/fakeData/products.js";
import ProductCard from "../PopularFood/ProductCard.jsx";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
const HotPizza = () => {
  return (
    <div className="container py-12 relative z-10">
      <h1 className="foods-title">Hot Pizza</h1>
      <div className="">
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            // when window width is >= 320px
            100: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            769: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper relative"
        >
          {products
            .filter((cat) => cat.category === "Pizza")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          <div className="w-24 flex mt-4">
            <IoIosArrowBack className="prev mx-auto mt-1 rounded-full w-8 h-8 border-2 border-primary text-primary cursor-pointer" />
            <IoIosArrowForward className="next mx-auto mt-1 rounded-full w-8 h-8 border-2 border-primary text-primary cursor-pointer" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HotPizza;
