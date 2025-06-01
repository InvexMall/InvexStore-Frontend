import React, { useState, useEffect } from 'react';
import { 
  SignInOutWrapper, 
  SignText, 
  SignLink, 
  UserInfo, 
  UserName, 
  LogoutButton 
} from '../../../styles/main/HeaderStyle';

export default function SignInOutBox() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    checkLoginStatus();
    
    // 로그인/로그아웃 이벤트 리스너
    const handleLoginEvent = () => checkLoginStatus();
    const handleLogoutEvent = () => {
      setIsLoggedIn(false);
      setUserData(null);
    };

    window.addEventListener('login', handleLoginEvent);
    window.addEventListener('logout', handleLogoutEvent);

    return () => {
      window.removeEventListener('login', handleLoginEvent);
      window.removeEventListener('logout', handleLogoutEvent);
    };
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    console.log('🔍 Debug - token:', token);
    console.log('🔍 Debug - userData:', user);
    
    if (token && user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserData(parsedUser);
        setIsLoggedIn(true);
        console.log('✅ SignInOutBox: 로그인 상태 확인됨', parsedUser);
      } catch (error) {
        console.error('❌ 사용자 데이터 파싱 오류:', error);
        setIsLoggedIn(false);
        setUserData(null);
      }
    } else {
      console.log('❌ SignInOutBox: 로그인 상태 없음');
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    window.dispatchEvent(new Event('logout'));
    console.log('로그아웃 완료');
  };

  if (isLoggedIn && userData) {
    return (
      <SignInOutWrapper>
        <UserInfo>
          <UserName>{userData.name || userData.email}님</UserName>
          <LogoutButton onClick={handleLogout}>
            로그아웃
          </LogoutButton>
        </UserInfo>
      </SignInOutWrapper>
    );
  }

  return (
    <SignInOutWrapper>
      <SignLink to="/signin">로그인</SignLink>
      <SignText>/</SignText>
      <SignLink to="/signup">회원가입</SignLink>
    </SignInOutWrapper>
  );
}