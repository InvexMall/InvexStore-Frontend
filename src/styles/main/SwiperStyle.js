import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 500px;
`;
export const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: full;
  transition: opacity 0.5s ease-in-out;
`;
export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  padding: 0 12px;
  cursor: pointer;
  user-select: none;
  backgroundColor:'#f0faff'
  border-radius: 5%;
  &:first-of-type { left: 16px; }
  &:last-of-type { right: 16px; }
`;