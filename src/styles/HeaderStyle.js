import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';


// Header (헤더 전체 레이아웃)
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
  margin-right: 100px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
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
  display: flex;
  justify-content: center;
  background: rgb(145, 184, 65);
  padding: 12px 0;
`;

export const NavLink = styled(RouterLink)` 
  margin: 0 16px;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;
