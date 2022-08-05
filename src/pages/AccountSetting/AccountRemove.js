import React from "react";
import styled from "styled-components";
import RemoveBackground from "../../images/RemoveBackground.svg";
import BigPinkButton from "../../components/BigPinkButton";
import TopBar from "../../components/Common/Sidebar/TopBar";
import { Link } from "react-router-dom";
import http from "../../common/http";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Text = styled.div`
    width: 152px;
    height: 58px;
    margin-left: 8%;
    margin-top: 20%;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #202020;
`;
const Background = styled.img`
    margin-top: 10%;
    width: 424.57px;
    height: 415.7px;
    align-items: center;
`;
const ButtonBox = styled.div`
    margin-top: 100px;
    margin-left: 24.38px;
    margin-bottom: 100px;
    width: 400px;
`;
const AccountRemove = () => {
    return(
        <Container>
            <TopBar/>
            <Text>회원 탈퇴가<br/>완료되었습니다.</Text>
            <Background src={RemoveBackground}/>
            <ButtonBox>
                <Link to ="/home"><BigPinkButton>메인 홈으로 돌아가기</BigPinkButton></Link>
            </ButtonBox>
        </Container>
    );
};
export default AccountRemove;