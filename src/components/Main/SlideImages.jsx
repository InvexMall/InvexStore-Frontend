/* src/components/Slider.jsx */
import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // >  아이콘
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // < 아이콘
import { 
    SliderContainer,
     Slide,
      Arrow 
    } from '../../styles/SlideImgStyle'

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

const SlideImages = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2000); //2초마다 다음 슬라이드로 바뀜
    return () => clearInterval(timer);
  }, []);
  //이전 슬라이드로 이동 음수 되는 것을 막으려고 나머지 연산
  const prevSlide = () => setIndex(prev => (prev - 1 + images.length) % images.length);
  //다음 슬라이드로 이동 이미지 데이터보다 큰 수로 이동하는 것을 막기 위한 나머지 연산
  const nextSlide = () => setIndex(prev => (prev + 1) % images.length);

  return (
    <SliderContainer style={{border: '1px solid #333'}}>
      <Arrow><ArrowBackIcon onClick={prevSlide} style={{marginBottom: '7px', backgroundColor:'#f0faff'}}></ArrowBackIcon></Arrow>
      
      
      <Slide src={images[index]} alt={`banner-${index}`} />


      <Arrow style={{backgroundColor:'#f0faff'}}><ArrowForwardIcon onClick={nextSlide} style={{marginBottom: '7px',}}>&gt;</ArrowForwardIcon></Arrow>

    </SliderContainer>
  );
};

export default SlideImages;
