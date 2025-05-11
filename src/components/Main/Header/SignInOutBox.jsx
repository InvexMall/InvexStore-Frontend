// src/components/SignInOut.jsx
import React from 'react';
import { SignText, SignLink } from '../../../styles/HeaderStyle'

const SignInOutBox = ({ isLoggedIn = false, userName = '' }) => (
  <>
    {isLoggedIn ? (
      <>
        <SignText>{userName}님</SignText>
        {/* set함수 사용해서 로그인 상태를 false로 바꿔야함. */}
        <SignLink to="/logout">로그아웃</SignLink>
      </>
    ) : (
      <>
        <SignLink to="/signin">로그인</SignLink>
        <SignLink to="/signup">회원가입</SignLink>
      </>
    )}
  </>
);

export default SignInOutBox;
