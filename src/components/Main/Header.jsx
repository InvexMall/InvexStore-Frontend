import React from 'react'
import {
  HeaderContainer,
  CenterBlock,
  Logo,
  CartHeart,
  Actions
} from '../../styles/HeaderStyle'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/Logo.png'
import SearchBar from './Header/SearchBar'
import SignInOutBox from './Header/SignInOutBox'
import CategoryNav from './Header/CategoryNav'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { red } from '@mui/material/colors'

const Header = () => (
  <>
    {/* 최상단 로그인/회원가입 */}
    <Actions><SignInOutBox /></Actions>
    

    {/* 로고+검색창(가로정중앙) + 아이콘(우측고정) */}
    <HeaderContainer>
      <CenterBlock>
        <Link to="/">
          <Logo src={LogoImg} alt="Shop Logo" />
        </Link>
        <SearchBar />
      </CenterBlock>

      <CartHeart>
        <Link to="/bag"><FaShoppingCart size={40} style={{color:'rgb(0, 0, 0)'}} /></Link>
        <Link to="/heart"><FaHeart size={40} style={{color:'rgb(255, 0, 0)'}}  /></Link>
      </CartHeart>
    </HeaderContainer>

    {/* 네비게이션 바 */}
    <CategoryNav />
  </>
)

export default Header;
