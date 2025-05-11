import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
    //회원가입 정보를 담을 객체 form
    const [form, setForm] = useState({
        email: '',
        phone: '',
        name: '',
        password: '',
        passwordConfirm: '',
    });

    // 각 필드별 에러 메시지를 저장할 객체
    const [errors, setErrors] = useState({
        email: '',
        phone: '',
        passwordConfirm: '',
    });
    //회원가입 버튼 중복 클릭 방지용 로딩 스테이트트
    const [loading, setLoading] = useState(false);

    // onChange 핸들러
    const handleChange = e => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        // 입력 시 해당 필드 에러는 초기화
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        // 이메일 검증
        if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = '올바른 이메일 주소를 입력해주세요.';
        }
        // 전화번호 검증 (010-1234-5678 패턴)
        if (!/^\d{3}-\d{4}-\d{4}$/.test(form.phone)) {
            newErrors.phone = '010-1234-5678 형식으로 입력해주세요.';
        }
        // 비밀번호 확인 검증
        if (form.password !== form.passwordConfirm) {
            newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        }
        setErrors(newErrors);
        // 에러 객체가 비어있으면 유효
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validate()) return;  // 클라이언트 검증 실패 시 API 호출하지 않음

        setLoading(true);
        try {

            const res = await axios.post(
                '/api/auth/register',
                {
                    email: form.email,
                    phone: form.phone,
                    name: form.name,
                    password: form.password,
                }
            );
            // 회원가입 성공 시 처리…
        } catch (err) {
            // 서버에서 필드별 에러를 보내줄 때

            if (err.response?.data?.errors) {
                setErrors(err.response.data.errors);
            } else {
                alert('회원가입에 실패했습니다.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* 이메일을 아이디로 사용하도록 하는 게 어떤지 */}
            <label>
                이메일
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder="a12345@naver.com"
                    onChange={handleChange}
                    required
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </label>
            {/* 이름 */}
            <label>
                이름
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>

            {/* 비밀번호 */}
            <label>
                비밀번호
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                />
                {/* 필요하다면 errors.password 로 에러 메시지 처리 */}
            </label>

            {/* 비밀번호 확인 */}
            <label>
                비밀번호 확인
                <input
                    name="passwordConfirm"
                    type="password"
                    value={form.passwordConfirm}
                    onChange={handleChange}
                    required
                />
                {errors.passwordConfirm && (
                    <p style={{ color: 'red' }}>{errors.passwordConfirm}</p>
                )}
            </label>
            
            
            <label>
                전화번호
                <input
                    name="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
            </label>

            <button type="submit" disabled={loading}>
                {loading ? '로딩 중…' : '회원가입'}
            </button>
        </form>

    );
}
