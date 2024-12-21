import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sliderbook1 from '../../assets/bookbanner1.jpg'
import sliderbook2 from '../../assets/bookbanner2.jpg'
import sliderbook3 from '../../assets/bookbanner3.jpg'
import sliderbook4 from '../../assets/bookbanner4.jpg'
import Slider from './Slider';

const Banner = () => {
    return (
        <div className=''>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <Slider image={sliderbook1} text={'Why You Should Read Books'}></Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider image={sliderbook2} text={'Why You Should Read Books'}></Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider image={sliderbook3} text={'Why You Should Read Books'}></Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider image={sliderbook4} text={'Why You Should Read Books'}></Slider>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;