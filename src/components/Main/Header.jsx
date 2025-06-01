import React from 'react';
import {
  HeaderWrapper,      // 새로 추가
  HeaderContainer,
  CenterBlock,
  Logo,
  CartHeart,
  Actions
} from '../../styles/main/HeaderStyle';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/Logo.png';
import SearchBar from './Header/SearchBar';
import SignInOutBox from './Header/SignInOutBox';
import CategoryNav from './Header/CategoryNav';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Header = () => (
  <HeaderWrapper> {/* 전체 래퍼로 감싸기 */}
    {/* 최상단 로그인/회원가입 */}
    <Actions>
      <SignInOutBox />
    </Actions>
          
    {/* 로고+검색창(가로정중앙) + 아이콘(우측고정) */}
    <HeaderContainer>
      <CenterBlock>
        <Link to="/">
          <Logo src={LogoImg} alt="Shop Logo" />
        </Link>
        <SearchBar />
      </CenterBlock>
       
      <CartHeart>
        <Link to="/bag">
          <FaShoppingCart size={32} /> {/* 크기 살짝 줄임 */}
        </Link>
        <Link to="/heart">
          <FaHeart size={32} />
        </Link>
      </CartHeart>
    </HeaderContainer>
     
    {/* 네비게이션 바 */}
    <CategoryNav />
  </HeaderWrapper>
);

export default Header;