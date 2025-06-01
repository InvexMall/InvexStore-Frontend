import React from 'react';
import ProductDetail from '../../components/product/product detail/ProductDetail'
import SlideImagesWithThumb from '../../components/Slide/SlideImageswithThumb'

const ProductDetailPage = () => {

    return (
        <div style={{
            width: '100%',
            backgroundColor: 'white',
            padding: '0 10%'  // 양쪽에 10% 여백
        }}>

            <div style={{
                width: '100%',  // 나머지 80% 전체 사용
                padding: '3% 0'
            }}>

                <div style={{
                    display: 'flex',
                    gap: '5%',  // 두 섹션 사이 5% 간격
                    width: '100%'
                }}>

                    {/* 왼쪽: 이미지 슬라이드 */}
                    <div style={{ width: '47.5%' }}>
                        {/* 여기에 이미지 슬라이드 컴포넌트 */}
                    < SlideImagesWithThumb />
                    </div>

                    {/* 오른쪽: 상품 정보 */}
                    <div style={{ width: '47.5%' }}>
                        {/* 여기에 제목, 가격 등 상품 정보 */}
                        < ProductDetail />
                    </div>

                </div>
            </div>
        </div>
    );

};
export default ProductDetailPage;