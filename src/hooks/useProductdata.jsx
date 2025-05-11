import { useState, useEffect, useCallback } from "react";
import { fetchProductData } from "../api/ProductApi";

export const useProductdata = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 캠페인 데이터 불러오기
    const loadProducts = useCallback(async () => {
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
        console.log('컴포넌트 마운트됨');
        loadProducts();
    }, [loadProducts]);

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
        products,
        loading,
        error,
        loadProducts,
    };
};

