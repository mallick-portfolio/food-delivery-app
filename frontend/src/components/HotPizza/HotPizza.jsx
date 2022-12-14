import React from "react";
import ProductCard from "../PopularFood/ProductCard.jsx";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import useProduct from "../../utilities/useProducts.js";
import Loading from "../Loading/Loading.jsx";
import { useState } from "react";
import FoodModal from "../Modal/FoodModal.jsx";
const HotPizza = () => {
  const [item, setItem] = useState(null);
  const [products, isloading] = useProduct();
  if (isloading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container py-12 relative z-10">
        <h1 className="foods-title">Hot Pizza</h1>
        <div className="">
          <Swiper
            loop={true}
            autoplay={true}
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper relative"
          >
            {products
              ?.filter((cat) => cat.category === "Pizza")
              ?.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard setItem={setItem} product={product} />
                </SwiperSlide>
              ))}
            <div className="w-24 flex mt-4">
              <IoIosArrowBack className="prev mx-auto mt-1 rounded-full w-8 h-8 border-2 border-primary text-primary cursor-pointer" />
              <IoIosArrowForward className="next mx-auto mt-1 rounded-full w-8 h-8 border-2 border-primary text-primary cursor-pointer" />
            </div>
          </Swiper>
        </div>
      </div>
      {item && <FoodModal item={item} setItem={setItem} />}
    </>
  );
};

export default HotPizza;
