import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const AuthorList = () => {
    return (
        <div className='w-[100%] h-[500px] border'>
        <Swiper className="mySwiper border-2 text-white"
        slidesPerView={3}
      >
        <SwiperSlide>
            <img src="/AmandaPodanyImage.jpg" alt="" className='w-[100px] h-[100px]'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/B.D.ChaurasiaImage.JPG" alt="" className='w-[100px] h-[100px]' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/JordWalkeImage.jpg" alt="" className='w-[100px] h-[100px]'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/MarieDiamondImage" alt="" className='w-[100px] h-[100px]' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/robindronathImage" alt="" className='w-[100px] h-[100px]' />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      </div> 
    );
};

export default AuthorList;