import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

// import required modules
// import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper pagination={true}  className="mySwiper">
        <SwiperSlide>
            <h3></h3>
            <img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slider-01.jpg?v=1652056793&width=2000" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slide3.jpg?v=1682405064&width=3800" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slide2.jpg?v=1682405064&width=750" alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}
