import React from "react";
import styled from "styled-components";
import LoadingLogo from "../images/LoadingLogo.svg";

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
  font-size: 20px;
  color: var(--main-pink);
`;

const MiddleLogo = styled.div`
  background: url(${LoadingLogo});
  height: 45.98px;
  width: 181px;
`;
export default LoadingPage;
