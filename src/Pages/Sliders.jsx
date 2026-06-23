import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.jpg'
import m5 from '../assets/m5.jpg'
import m6 from '../assets/m6.jpg'
import m7 from '../assets/m7.jpg'
import m8 from '../assets/m8.jpg'


const Sliders = () => {
  return (
   <>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={m1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={m3}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={m4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m5}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={m6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m6} />
        </SwiperSlide>
      </Swiper>
   
   </>
  )
}

export default Sliders