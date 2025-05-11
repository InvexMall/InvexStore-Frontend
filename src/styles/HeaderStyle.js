import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


// Header (헤더 전체 레이아웃)
// 1) HeaderContainer: position: relative 추가
export const HeaderContainer = styled.header`
  position: relative;
  padding: 16px 32px;  /* 좌우 패딩 */
  background: #fff;
  box-shadow: none;
  height: 80px;        /* 원하는 높이 지정 */
`

// 2) CenterBlock: 화면 가로 중앙 정렬
export const CenterBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 8px;            /* 로고↔검색창 간격 */
`

// 3) Logo: margin 제거
export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
  margin: 0;
`

//장바구니 찜 아이콘 묶음
export const CartHeart = styled.div`
  position: absolute;
  top: 50%;
  right: 76px;         /* HeaderContainer 패딩과 일치 */
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 32px;           /* 아이콘 간격 */
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 32px 0;
`;

// SignInOutBox (로그인/회원가입 부분)
export const SignLink = styled(RouterLink)`
  margin-left: 12px;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const SignText = styled.span`
  font-size: 1rem;
  color: #333;
  margin-right: 5px;
`;


// CategoryNav (네비게이션바 부분)
export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 12px 0;
  margin-bottom: 20px;
`;

export const NavLink = styled(RouterLink)` 
  margin: 0 16px;
  font-size: 1rem;
  font-family: Sans-Serif;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

/* 햄버거 + 드롭다운 전체 래퍼 */
export const HamburgerWrapper = styled.div`
  position: absolute;
  left: 240px;
  display: flex;
  align-items: center;
  cursor: pointer;

  /* hover 시에만 DropMenu 보이기 */
  &:hover > ul {
    display: block;
  }
`;

/* 최상위 드롭다운 메뉴 (세로 리스트) */
export const MegaMenu = styled.ul`
  display: none;               /* 기본 숨김 */
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  padding: 8px 0;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  list-style: none;
  min-width: 160px;
  z-index: 100;
`;

/* 상위 메뉴 아이템 */
export const MegaMenuItem = styled.li`
  position: relative;
  padding: 8px 16px;
  white-space: nowrap;
  &:hover {
    background: #f5f5f5;
  }

  /* 상위 메뉴 호버 시 자식(SubMenu) 보이기 */
  &:hover > ul {
    display: block;
  }
`;

/* 하위 메뉴 리스트 */
export const SubMenu = styled.ul`
  display: none;               /* 기본 숨김 */
  position: absolute;
  top: 0;
  left: 100%;
  background: #fff;
  padding: 8px 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  list-style: none;
  min-width: 140px;
  z-index: 100;
`;

/* 하위 메뉴 아이템 */
export const SubMenuItem = styled.li`
  padding: 8px 16px;
  white-space: nowrap;
  &:hover {
    background: #eee;
  }
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none; color: inherit;
`;



