import axios from "axios";

// 공통 axios 인스턴스 생성 (프록시 활용)
const api = axios.create({
  baseURL: "/api/products", // Vite 프록시를 활용
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchProductData = async () => {
  try {
    // 실제 요청: /api/products/all → Vite가 http://localhost:8081/api/products/all로 프록시
    const response = await api.get("/all");
    console.log('API 응답 받음:', response);
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};
  
  // //폼 작성 후 post
  // export const createCampaignData = async (formData) => {
  //   try {
  //     console.log("FormData received:", formData);
  
  //     const campaignDTO = {
  //       campaignId: generateCampaignId(), //생성한 ID 값
  //       campaignClassification1: formData.campaignClassification1,
  //       campaignClassification2: formData.campaignClassification2,
  //       campaignName: formData.campaignName,
  //       campaignDescription: formData.campaignDescription,
  //       startDate: formData.startDate,
  //       endDate: formData.endDate,
  //       endAfter: parseInt(formData.endAfter),
  //       visibility: formData.visibility,
  //       createdDate: new Date().toISOString().split("T")[0],
  //     };
  
  //     console.log("Sending data to server:", campaignDTO);
  
  //     const response = await api.post("/campaigns/add", campaignDTO);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error creating campaign:", error);
  //     throw error;
  //   }
  // };