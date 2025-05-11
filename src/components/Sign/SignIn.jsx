// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate }     from 'react-router-dom';
import axios               from 'axios';

export default function LoginPage() {
  //아이디는 이메일로 우선 사용 
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
      const res = await axios.post('/api/auth/login', {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.message || '로그인에 실패했습니다.';
      setErrors({ email: msg, password: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>로그인</h2>

      <label>
        이메일
        <input
          name="email"
          type="email"
          placeholder="a12345@naver.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.email}</p>
        )}
      </label>

      <label>
        비밀번호
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.password}</p>
        )}
      </label>

      <button
        type="submit"
        disabled={loading}
        style={{ marginTop: '16px' }}
      >
        {loading ? '로딩 중…' : '로그인'}
      </button>
    </form>
  );
}
