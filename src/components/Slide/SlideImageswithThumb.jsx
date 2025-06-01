/* src/components/Slider.jsx */
import React, { useState } from 'react';

import {
    SliderContainer,
    Slide,
    Arrow
} from '../../styles/main/SwiperStyle';


// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//모듈 import
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

export default function SlideImagesWithThumb() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleThumbnailClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    return (
        <div>
            {/* 메인 슬라이더 */}
            <SliderContainer>
                <Swiper
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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

            {/* 썸네일 이미지들 - SliderContainer 밖에 배치 */}
            <div style={{
                padding: '20px',
                marginTop: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {images.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`thumbnail-${idx}`}
                            onClick={() => handleThumbnailClick(idx)}
                            style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                border: activeIndex === idx ? '3px solid #007bff' : '2px solid #ddd',
                                opacity: activeIndex === idx ? 1 : 0.7,
                                transition: 'all 0.3s ease',
                                transform: activeIndex === idx ? 'scale(1.05)' : 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                if (activeIndex !== idx) {
                                    e.target.style.opacity = '1';
                                    e.target.style.transform = 'scale(1.02)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeIndex !== idx) {
                                    e.target.style.opacity = '0.7';
                                    e.target.style.transform = 'scale(1)';
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}