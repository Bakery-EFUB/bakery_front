import React from "react";
import styled from "styled-components";
//figma export문제로 다른 로고로 한시적 대체
import LoadingLogo from "../images/LoadingLogo.svg";
const Container = styled.div`
  text-align: center;
`;

const Contents = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;
const SubText = styled.p`
  font-family: "AppleSDGothicNeo";
  font-size: 20px;
  color: var(--main-pink);
`;

const MiddleLogo = styled.div`
  background: url(${LoadingLogo});
  height: 45.98px;
  width: 181px;
`;

const LoadingPage = () => {
  return (
    <div>
      <Container>
        <Contents>
          <SubText>특별한 하루 메이커</SubText>
          <MiddleLogo></MiddleLogo>
        </Contents>
      </Container>
    </div>
  );
};

export default LoadingPage;
