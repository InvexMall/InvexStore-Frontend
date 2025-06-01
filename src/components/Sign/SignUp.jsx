import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const navigate = useNavigate();
    // 회원가입 정보를 담을 객체 form
    const [form, setForm] = useState({
        email: '',
        phoneNumber: '', 
        name: '',
        password: '',
        passwordConfirm: '',
    });

    // 각 필드별 에러 메시지를 저장할 객체
    const [errors, setErrors] = useState({
        email: '',
        phoneNumber: '',
        name: '',
        password: '',
        passwordConfirm: '',
    });

    // 회원가입 버튼 중복 클릭 방지용 로딩 스테이트
    const [loading, setLoading] = useState(false);
    
    // 이메일 중복 체크 상태
    const [emailChecked, setEmailChecked] = useState(false);
    const [emailAvailable, setEmailAvailable] = useState(false);

    // onChange 핸들러
    const handleChange = e => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        // 입력 시 해당 필드 에러는 초기화
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
        
        // 이메일이 변경되면 중복 체크 상태 초기화
        if (e.target.name === 'email') {
            setEmailChecked(false);
            setEmailAvailable(false);
        }
    };

    // 이메일 중복 체크
    const checkEmailDuplicate = async () => {
        if (!form.email) {
            setErrors(prev => ({ ...prev, email: '이메일을 먼저 입력해주세요.' }));
            return;
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            setErrors(prev => ({ ...prev, email: '올바른 이메일 주소를 입력해주세요.' }));
            return;
        }
        
        try {
            console.log('이메일 중복 체크 요청:', form.email);
            const response = await fetch(`/api/auth/check-email?email=${form.email}`);
            
            console.log('응답 상태:', response.status);
            console.log('응답 헤더:', response.headers);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('받은 데이터:', data);
            
            setEmailChecked(true);
            setEmailAvailable(data.available);
            
            if (data.available) {
                setErrors(prev => ({ ...prev, email: '' }));
            } else {
                setErrors(prev => ({ ...prev, email: '이미 사용중인 이메일입니다.' }));
            }
        } catch (err) {
            console.error('이메일 체크 오류:', err);
            setErrors(prev => ({ ...prev, email: `이메일 확인 중 오류: ${err.message}` }));
        }
    };

    const validate = () => {
        const newErrors = {};
        
        // 이메일 검증
        if (!form.email) {
            newErrors.email = '이메일은 필수입니다.';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = '올바른 이메일 주소를 입력해주세요.';
        } else if (!emailChecked || !emailAvailable) {
            newErrors.email = '이메일 중복 체크를 해주세요.';
        }
        
        // 이름 검증
        if (!form.name.trim()) {
            newErrors.name = '이름은 필수입니다.';
        }
        
        // 비밀번호 검증 (백엔드와 동일한 규칙)
        if (!form.password) {
            newErrors.password = '비밀번호는 필수입니다.';
        } else if (form.password.length < 8) {
            newErrors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/.test(form.password)) {
            newErrors.password = '비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.';
        }
        
        // 전화번호 검증 (백엔드와 동일한 패턴)
        if (!form.phoneNumber) {
            newErrors.phoneNumber = '전화번호는 필수입니다.';
        } else if (!/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/.test(form.phoneNumber)) {
            newErrors.phoneNumber = '010-1234-5678 형식으로 입력해주세요.';
        }
        
        // 비밀번호 확인 검증
        if (form.password !== form.passwordConfirm) {
            newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.email,
                    phoneNumber: form.phoneNumber, 
                    name: form.name,
                    password: form.password,
                }),
            });
            
            const data = await response.json();
            
            
            if (data.success) {
                alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
                navigate('/signin'); 
            } else {
                alert(data.message || '회원가입에 실패했습니다.');
            }
        } catch (err) {
            alert('서버 연결에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">회원가입</h1>
                
                <div className="signup-form">
                    {/* 이메일 */}
                    <div className="form-group">
                        <label className="form-label">이메일 *</label>
                        <div className="email-input-group">
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                placeholder="example@email.com"
                                onChange={handleChange}
                                className={`form-input ${errors.email ? 'error' : emailChecked && emailAvailable ? 'success' : ''}`}
                                required
                            />
                            <button
                                type="button"
                                onClick={checkEmailDuplicate}
                                className="email-check-btn"
                                disabled={!form.email || loading}
                            >
                                중복확인
                            </button>
                        </div>
                        {errors.email && <p className="error-message">{errors.email}</p>}
                        {emailChecked && emailAvailable && (
                            <p className="success-message">사용 가능한 이메일입니다.</p>
                        )}
                    </div>

                    {/* 이름 */}
                    <div className="form-group">
                        <label className="form-label">이름 *</label>
                        <input
                            name="name"
                            type="text"
                            value={form.name}
                            placeholder="홍길동"
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'error' : ''}`}
                            required
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    {/* 전화번호 */}
                    <div className="form-group">
                        <label className="form-label">전화번호 *</label>
                        <input
                            name="phoneNumber"
                            type="tel"
                            placeholder="01012345678"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                            required
                        />
                        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                    </div>

                    {/* 비밀번호 */}
                    <div className="form-group">
                        <label className="form-label">비밀번호 *</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            placeholder="8자 이상, 대소문자, 숫자, 특수문자 포함"
                            onChange={handleChange}
                            className={`form-input ${errors.password ? 'error' : ''}`}
                            required
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>

                    {/* 비밀번호 확인 */}
                    <div className="form-group">
                        <label className="form-label">비밀번호 확인 *</label>
                        <input
                            name="passwordConfirm"
                            type="password"
                            value={form.passwordConfirm}
                            placeholder="비밀번호를 다시 입력해주세요"
                            onChange={handleChange}
                            className={`form-input ${errors.passwordConfirm ? 'error' : ''}`}
                            required
                        />
                        {errors.passwordConfirm && (
                            <p className="error-message">{errors.passwordConfirm}</p>
                        )}
                    </div>

                    <button 
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="submit-btn"
                    >
                        {loading ? '처리중...' : '회원가입'}
                    </button>
                </div>

                <div className="login-link">
                    이미 계정이 있으신가요? 
                    <a href="/signin" className="link">로그인하기</a>
                </div>
            </div>

            <style>
                {`
                .signup-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%);
                    padding: 20px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }

                .signup-card {
                    background: white;
                    padding: 40px;
                    border-radius: 16px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 480px;
                }

                .signup-title {
                    text-align: center;
                    color: #333;
                    margin-bottom: 32px;
                    font-size: 28px;
                    font-weight: 700;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-label {
                    font-weight: 600;
                    color: #374151;
                    font-size: 14px;
                }

                .form-input {
                    padding: 12px 16px;
                    border: 2px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: all 0.2s;
                    outline: none;
                }

                .form-input:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }

                .form-input.error {
                    border-color: #ef4444;
                    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
                }

                .form-input.success {
                    border-color: #10b981;
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
                }

                .email-input-group {
                    display: flex;
                    gap: 8px;
                }

                .email-input-group .form-input {
                    flex: 1;
                }

                .email-check-btn {
                    padding: 12px 16px;
                    background: #667eea;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                    white-space: nowrap;
                }

                .email-check-btn:hover:not(:disabled) {
                    background: #5a67d8;
                }

                .email-check-btn:disabled {
                    background: #9ca3af;
                    cursor: not-allowed;
                }

                .submit-btn {
                    padding: 16px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                    margin-top: 8px;
                }

                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-1px);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                .error-message {
                    color: #ef4444;
                    font-size: 14px;
                    margin: 0;
                }

                .success-message {
                    color: #10b981;
                    font-size: 14px;
                    margin: 0;
                }

                .login-link {
                    text-align: center;
                    margin-top: 24px;
                    color: #6b7280;
                    font-size: 14px;
                }

                .link {
                    color: #667eea;
                    text-decoration: none;
                    font-weight: 600;
                    margin-left: 4px;
                }

                .link:hover {
                    text-decoration: underline;
                }

                @media (max-width: 640px) {
                    .signup-card {
                        padding: 24px;
                        margin: 0;
                    }

                    .email-input-group {
                        flex-direction: column;
                    }

                    .email-check-btn {
                        width: 100%;
                    }
                }
                `}
            </style>
        </div>
    );
}