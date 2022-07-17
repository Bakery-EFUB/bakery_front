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
  position: absolute;
  width: 152px;
  height: 58px;
  left: 24px;
  top: 160px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #202020;
`;
const Background = styled.img`
  margin-top: 296px;
  margin-bottom: 214.3px;
  align-items: center;
`;
const ButtonBox = styled.div`
  margin-top: 806px;
  margin-left: 24.38px;
  padding-bottom: 60px;
`;
const RemoveAccount = () => {
  return (
    <Container>
      <TopBar />
      <Text>
        회원 탈퇴가
        <br />
        완료되었습니다.
      </Text>
      <Background src={RemoveBackground} />
      <ButtonBox>
        <BigPinkButton>메인 홈으로 돌아가기</BigPinkButton>
      </ButtonBox>
    </Container>
  );
};
export default RemoveAccount;
