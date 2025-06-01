/* src/components/Slider.jsx */
import React, { useState, useEffect } from 'react';

import {
  SliderContainer,
  Slide,
  Arrow
} from '../../styles/SlideImgStyle';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//모듈 import
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//이미지 파일들들
import beach1 from '../../assets/top5Images/beach1.jpeg';
import mountain2 from '../../assets/top5Images/mountain2.jpeg';
import sky3 from '../../assets/top5Images/Sky3.jpeg';
import river4 from '../../assets/top5Images/river4.jpeg';
import dog5 from '../../assets/top5Images/dog5.jpeg';

const images = [
  beach1,
  mountain2,
  sky3,
  river4,
  dog5,
];



export default function SlideImages() {
  return (
    <SliderContainer>
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={5}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      style={{ height: '500px' }}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <Slide src={src} alt={`slide-${idx}`} />
        </SwiperSlide>
      ))}
    </Swiper>
    </SliderContainer>
  );
}