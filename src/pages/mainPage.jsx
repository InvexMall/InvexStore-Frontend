import React from 'react';
import Header from '../components/Main/Header';
import SliderImages from '../components/Main/SlideImages';
import ProductPage from './product/ProductPage';
import {LeftSide,
        RightSide,
        Main,
        MainContent,
        BodyWrapper,
} from '../styles/main/mainPage';
const MainPage = () => {
    return (
        <>
            {/* 상단 부분 */}
            <Header />
            {/* 메인 컨텐츠 부분 */}
            <BodyWrapper>
                {/* 왼쪽 공백,가운데,오른쪽 공백 3부분으로 나눈다 */}
                <LeftSide></LeftSide>
            <Main>
                
                <MainContent>
                    <SliderImages />
                    
                    {/* 상품 뿌리는 부분 */}
                    <ProductPage/>
                    
                    
                </MainContent>
                
            </Main><RightSide></RightSide>
            </BodyWrapper>
            {/* 하단부분 */}
            
        </>
    );
};

export default MainPage;