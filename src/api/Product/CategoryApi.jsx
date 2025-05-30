import axios from "axios";

// 공통 axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://localhost:8081/api/categorys",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchMainCategoryData = async () => {
    try {
      //http://localhost:8081/api/allmaincategory
      const response = await api.get("/allmaincategory");
      console.log('allmaincategory API 응답 받음:', response);
      return response.data;
    } catch (error) {
      console.error("Error fetching allmaincategory data:", error);
      return [];
    }
  };