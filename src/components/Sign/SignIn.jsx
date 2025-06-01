import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/AuthApi'; // API 분리!
import {
  LoginContainer,
  LoginForm,
  LoginTitle,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  LoginButton
} from '../../styles/Sign/SignInStyle';

export default function LoginPage() {
  // 아이디는 이메일로 우선 사용 
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    // 이메일 검증
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = '올바른 이메일 형식으로 입력해주세요.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // 분리된 API 함수 사용
      const response = await loginUser({
        email: form.email,
        password: form.password,
      });
      
      // 🔍 응답 전체 구조 확인 (디버깅 코드 추가)
      console.log('🔍 전체 응답:', response);
      console.log('🔍 응답 키들:', Object.keys(response));
      console.log('🔍 token 필드:', response.token);
      console.log('🔍 user 필드:', response.user);
      console.log('🔍 data 필드:', response.data);
      
      // 토큰 저장
      localStorage.setItem('token', response.token);
      
      // 사용자 정보 저장 (있다면)
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      // SignInOutBox에게 로그인 성공 알리기 (이벤트 발생)
      window.dispatchEvent(new Event('login'));
      
      console.log('로그인 성공, 메인 페이지로 이동');
      navigate('/');
      
    } catch (err) {
      console.error('로그인 에러:', err);
      
      let errorMessage = '로그인에 실패했습니다.';
      
      // 에러 상태별 메시지 처리
      if (err.response?.status === 401) {
        errorMessage = '이메일 또는 비밀번호가 잘못되었습니다.';
      } else if (err.response?.status === 404) {
        errorMessage = '존재하지 않는 계정입니다.';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
      
      setErrors({ 
        email: errorMessage, 
        password: errorMessage 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>로그인</LoginTitle>

        <InputGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="a12345@naver.com"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            required
          />
          {errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={form.password}
            onChange={handleChange}
            disabled={loading}
            required
          />
          {errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
        </InputGroup>

        <LoginButton type="submit" disabled={loading}>
          {loading ? '로딩 중…' : '로그인'}
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}