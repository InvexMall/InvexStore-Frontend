import React, { useEffect } from 'react';
import ProductCardGrid from '../../components/product/ProductCardGrid';
import { useProductdata } from '../../hooks/useProductdata' //임시로 product 화면에서 데이터 호출해서 확인하려고 넣음

const ProductPage = () => {
  const { products, loading, error } = useProductdata(); //임시로 product 화면에서 데이터 호출해서 확인하려고 넣음

  useEffect(() => {
    console.log('ProductPage가 마운트되었습니다.');
  }, []); //임시로 product 화면에서 데이터 호출해서 확인하려고 넣음

  useEffect(() => {
    console.log('상품 데이터:', products);
  }, [products]); //임시로 product 화면에서 데이터 호출해서 확인하려고 넣음

    return (
      <div>
        <ProductCardGrid />
      </div>
    );
  };

export default ProductPage;
