import React from 'react';
import { HeaderContainer, Logo,Actions} from '../../styles/HeaderStyle'
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/Logo.png'
import SearchBar from './Header/SearchBar';
import SignInOutBox from './Header/SignInOutBox';
import CategoryNav from './Header/CategoryNav';
//로고 /로그인(로그아웃) | 회원가입 /검색바
const Header = () => (
  <>
    <HeaderContainer>
      {/* 누르면 메인으로 이동하게끔 */}
      <Link to="/">
        <Logo src={LogoImg} alt="Shop Logo" />
      </Link>

      <SearchBar placeholder="상품을 검색하세요..." />
      <Actions>
        <SignInOutBox />
      </Actions>
     
    </HeaderContainer>
    <CategoryNav></CategoryNav>
  </>
  );
  
  export default Header;

