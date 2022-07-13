import React from "react";
import styled from "styled-components";
import RemoveBackground from "../images/RemoveBackground.svg";
import BigPinkButton from "../components/BigPinkButton";
import TopBar from "../components/TopBar";
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Text = styled.div`
    color: black;
    font-family: 'Apple SD Gothic Neo';
    font-size: 20px;
    text-align: left;
    margin-top: 20%;
    margin-left: 10%;
    font-weight: bold;
    white-space: wrap;
`;
const Background = styled.img`
    margin-top:30%;
    align-items: center;
`;
const ButtonBox = styled.div`
    margin-top: 78%;
    margin-left: 5%;
`;
const RemoveAccount = () => {
    return(
        <div>
            <TopBar/>
            <Text>회원 탈퇴가<br/>완료되었습니다.</Text>
            <Background src={RemoveBackground}/>
            <ButtonBox>
                <BigPinkButton>메인 홈으로 돌아가기</BigPinkButton>
            </ButtonBox>
        </div>
    );
};
export default RemoveAccount;

