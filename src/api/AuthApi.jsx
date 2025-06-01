import axios from "axios";

// 인증 관련 axios 인스턴스
const authApi = axios.create({
  baseURL: "/api/auth",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 요청 인터셉터 - JWT 토큰 자동 추가
authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 토큰 만료 처리
authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

// 로그인 API
export const loginUser = async (loginData) => {
  try {
    console.log('로그인 요청:', loginData);
    
    const response = await authApi.post("/signin", {
      email: loginData.email,
      password: loginData.password
    });
    
    console.log('로그인 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error("로그인 실패:", error);
    throw error;
  }
};

// 회원가입 API 
export const registerUser = async (userData) => {
  try {
    console.log('회원가입 요청:', userData);
    
    const response = await authApi.post("/signup", userData);
    
    console.log('회원가입 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error("회원가입 실패:", error);
    throw error;
  }
};

// 토큰 검증 API
export const verifyToken = async () => {
  try {
    const response = await authApi.get("/verify");
    return response.data;
  } catch (error) {
    console.error("토큰 검증 실패:", error);
    throw error;
  }
};

// 로그아웃 API (클라이언트 측)
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.dispatchEvent(new Event('logout'));
  console.log('로그아웃 완료');
};