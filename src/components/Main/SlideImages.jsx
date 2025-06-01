/* src/components/Slider.jsx */
import React from 'react';
import Slider from 'react-slick';

// React Slick CSS import (이것이 제일 먼저 와야 함)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 기존 스타일 파일 import
import {
  SliderContainer,
  SlideWrapper,
  SlideImage,
  SlideOverlay,
  SlideContent
} from '../../styles/main/SlideImgStyle';

// 이미지 파일들
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
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "110px", // 더 넓게 설정해서 양옆이 더 많이 보이도록
    slidesToShow: 1, // 1개만 보이도록 설정
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    
  };

  // 이미지별 제목과 설명
  const slideData = [
    { title: "슬라이드1", description: "슬라이드1내용" },
    { title: "슬라이드2", description: "슬라이드2내용" },
    { title: "슬라이드3", description: "슬라이드3내용" },
    { title: "슬라이드4", description: "슬라이드4내용" },
    { title: "슬라이드5", description: "슬라이드5내용" },
  ]

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <SlideWrapper>
              <SlideImage src={src} alt={`slide-${idx}`} />
              <SlideOverlay>
                <SlideContent>
                  <h3>{slideData[idx].title}</h3>
                  <p>{slideData[idx].description}</p>
                </SlideContent>
              </SlideOverlay>
            </SlideWrapper>
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
}