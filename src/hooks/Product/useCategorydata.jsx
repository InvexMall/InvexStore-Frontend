import { useState, useEffect, useCallback } from "react";
import { fetchMainCategoryData } from "../../api/Product/CategoryApi";

export const useMainCategoryData = () => {
    const [Maincategorys, setMaincategorys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 메인카테고리 리스트 받아오기
    const loadMaincategorys = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchProductData();
            console.log("use product data 받아온 상품 데이터 ",data);
            setProducts(data);
        } catch (err) {
            setError(err.message || "상품 데이터를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    }, []);

    // 컴포넌트 마운트 시 데이터 로드
    useEffect(() => {
        loadMaincategorys();
    }, [loadMaincategorys]);

    // const createCampaign = async (formData) => {
    //     try {
    //         setLoading(true);
    //         setError(null);
    //         const newCampaign = await createCampaignData(formData);
    //         setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
    //         return newCampaign;
    //     } catch (err) {
    //         setError(err.message || "캠페인 생성에 실패했습니다.");
    //         throw err;
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return {
        Maincategorys,
        loading,
        error,
        loadMaincategorys,
    };
};