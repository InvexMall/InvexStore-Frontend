import React from 'react';
import SignIn from '../components/Sign/SignIn';
import Header from '../components/Main/Header';
import {LeftSide,
    RightSide,
    Main,
    MainContent,
    BodyWrapper,
} from '../styles/mainPage'
const SignInPage = () => {

    return (
        <>
            {/* 상단 부분 */}
            <Header />
            {/* 메인 컨텐츠 부분 */}
            <BodyWrapper>
                {/* 왼쪽 공백,가운데,오른쪽 공백 3부분으로 나눈다 */}
                <LeftSide></LeftSide>
            <Main>
                
                
                    <SignIn/>
               
                
            </Main>
                <RightSide></RightSide>
            </BodyWrapper>
            {/* 하단부분 */}
            
        </>
    );
};

export default SignInPage;