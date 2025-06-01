import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
//헤더 스타일
// 전체 헤더 래퍼 (새로 추가)
export const HeaderWrapper = styled.div`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

// Actions (로그인/회원가입 영역) - 개선됨
export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 32px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  min-height: 50px;
`;

// Header (헤더 전체 레이아웃) - 높이 조정
export const HeaderContainer = styled.header`
  position: relative;
  padding: 15px 32px;   /* 20px → 15px로 줄임 */
  background: #fff;
  height: 70px;         /* 90px → 70px로 줄임 */
  display: flex;
  align-items: center;
`;

// 중앙 블록 (로고 + 검색창) - 간격 조정
export const CenterBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 15px;            /* 20px → 15px로 줄임 */
`;

// 로고 - 크기 조정
export const Logo = styled.img`
  width: 100px;         /* 130px → 100px로 줄임 */
  height: auto;
  max-height: 50px;     /* 최대 높이 제한 추가 */
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

// 장바구니 & 찜 아이콘 영역 - 개선됨
export const CartHeart = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 24px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      background: #f8f9fa;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    svg {
      transition: color 0.3s ease;
    }
  }
  
  /* 장바구니 아이콘 스타일 */
  a:first-child svg {
    color: #495057;
    
    &:hover {
      color: #007bff;
    }
  }
  
  /* 하트 아이콘은 그대로 빨간색 유지 */
  a:last-child svg {
    color: #dc3545;
    
    &:hover {
      color: #c82333;
    }
  }
`;

// SignInOutBox 관련 스타일들 - 개선됨
export const SignInOutWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #dee2e6;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #007bff;
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);
  }
`;

export const SignText = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 500;
`;

export const SignLink = styled(RouterLink)`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #007bff;
    color: #fff;
    text-decoration: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.span`
  font-size: 0.9rem;
  color: #495057;
  font-weight: 500;
`;

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid #dc3545;
  color: #dc3545;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #dc3545;
    color: #fff;
  }
`;

// CategoryNav (네비게이션바) - 개선됨
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background: #fff;
  border-top: 1px solid #e9ecef;
  padding: 16px 0;
  margin-bottom: 20px;
`;

export const NavLink = styled(RouterLink)`
  margin: 0 20px;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #495057;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #007bff;
    background: #f8f9fa;
  }
  
  &.active {
    color: #007bff;
    background: #e7f3ff;
  }
`;

// 햄버거 메뉴 관련 - 개선됨
export const HamburgerWrapper = styled.div`
  position: absolute;
  left: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f8f9fa;
  }

  &:hover > ul {
    display: block;
  }
`;

export const MegaMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  padding: 12px 0;
  margin: 0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: 1px solid #e9ecef;
  list-style: none;
  min-width: 180px;
  z-index: 100;
`;

export const MegaMenuItem = styled.li`
  position: relative;
  
  &:hover {
    background: #f8f9fa;
  }

  &:hover > ul {
    display: block;
  }
  
  a {
    display: block;
    padding: 12px 20px;
    color: #495057;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    
    &:hover {
      color: #007bff;
    }
  }
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background: #fff;
  padding: 8px 0;
  margin: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: 1px solid #e9ecef;
  list-style: none;
  min-width: 160px;
  z-index: 100;
`;

export const SubMenuItem = styled.li`
  a {
    display: block;
    padding: 10px 16px;
    color: #6c757d;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: #007bff;
      background: #f8f9fa;
    }
  }
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;