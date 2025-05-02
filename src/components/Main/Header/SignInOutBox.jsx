// src/components/SignInOut.jsx
import React from 'react';
import { SignText, SignLink } from '../../../styles/HeaderStyle'

const SignInOutBox = ({ isLoggedIn = false, userName = '' }) => (
  <>
    {isLoggedIn ? (
      <>
        <SignText>{userName}님</SignText>
        <SignLink to="/logout">로그아웃</SignLink>
      </>
    ) : (
      <>
        <SignLink to="/login">로그인</SignLink>
        <SignLink to="/signup">회원가입</SignLink>
      </>
    )}
  </>
);

export default SignInOutBox;
