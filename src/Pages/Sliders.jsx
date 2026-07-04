import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";


import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";
import m8 from "../assets/m8.jpg";

const Sliders = () => {
  return (
    <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"

  loop={true}

  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}

  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}

  pagination={{ clickable: true }}

  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper"
>
      <SwiperSlide><img src={m1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={m2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={m3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={m4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={m5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={m6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={m7} alt="" /></SwiperSlide>
      <SwiperSlide><img src={m8} alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default Sliders;