import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  
  .slick-slider {
    height: 100%;
  }
  
  .slick-list {
    height: 100%;
  }
  
  .slick-track {
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  /* 모든 슬라이드 기본 스타일 */
  .slick-slide {
    opacity: 0.4;
    transform: scale(0.75);
    transition: all 0.6s ease;
  }
  
  /* 센터 슬라이드만 선명하게 */
  .slick-center {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
  
  /* 화살표 스타일 */
  .slick-arrow {
    z-index: 15;
    width: 60px;
    height: 60px;
    
    &:before {
      font-size: 60px;
      color: white;
      text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
    }
    
    &:hover:before {
      color: #007bff;
    }
  }
  
  .slick-prev {
    left: 40px;
  }
  
  .slick-next {
    right: 40px;
  }
  
  /* 점 표시기 스타일 */
  .slick-dots {
    bottom: 40px;
    
    li button:before {
      font-size: 18px;
      color: white;
      opacity: 0.7;
    }
    
    li.slick-active button:before {
      color: #007bff;
      opacity: 1;
    }
  }
`;

export const SlideWrapper = styled.div`
  height: 520px;
  margin: 0 10px;
  position: relative;
  transition: all 0.6s ease;
  cursor: pointer;
  
  /* 센터 슬라이드 특별 효과 */
  &.slick-center {
    z-index: 10;
    
    /* 파란색 테두리 애니메이션 */
    &::after {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 3px solid rgba(0, 123, 255, 0.6);
      border-radius: 25px;
      pointer-events: none;
      opacity: 0;
      animation: centerGlow 2s ease-in-out infinite;
    }
  }
  
  /* 호버 효과 - 양옆 슬라이드만 */
  &:not(.slick-center):hover {
    opacity: 0.7;
    transform: scale(0.8);
  }
  
  /* 센터 슬라이드 호버 */
  &.slick-center:hover {
    transform: scale(1.03) !important;
  }
  
  @keyframes centerGlow {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.6s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  
  /* 센터 슬라이드일 때 더 강한 그림자 */
  .slick-center & {
    box-shadow: 0 25px 60px rgba(0,0,0,0.6);
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,0,0,0.4) 70%,
    rgba(0,0,0,0.8) 100%
  );
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  padding: 25px;
  transition: all 0.6s ease;
  
  /* 센터 슬라이드일 때 더 선명한 배경 */
  .slick-center & {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0,0,0,0.2) 60%,
      rgba(0,0,0,0.7) 100%
    );
    padding: 40px;
  }
`;

export const SlideContent = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  transition: all 0.6s ease;
  
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    transition: all 0.6s ease;
    
    /* 센터 슬라이드일 때만 큰 제목 */
    .slick-center & {
      font-size: 32px;
      margin-bottom: 15px;
      text-shadow: 3px 3px 8px rgba(0,0,0,0.9);
    }
  }
  
  p {
    font-size: 12px;
    opacity: 0.6;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
    transition: all 0.6s ease;
    
    /* 센터 슬라이드일 때만 큰 설명 */
    .slick-center & {
      font-size: 18px;
      opacity: 1;
      text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
    }
  }
`;