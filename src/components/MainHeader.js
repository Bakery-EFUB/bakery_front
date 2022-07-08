import React from "react";
import MainBackground from "../images/MainBackground.svg";
import styled from "styled-components";

const BackgroundImg = styled.div`
  background: url(${MainBackground});
  width: 100%;
  height: 216px;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 23px;
  border-radius: 6px;
  position: relative;
`;

const TextContainer = styled.div`
  color: var(--white);
  padding: 10px 20px;
  font-size: 15px;

  header {
    text-transform: uppercase;
    font-weight: 750;
    font-size: 28px;
  }
`;
const ServiceIntro = styled.button`
  border-radius: 3px;
  color: var(--white);
  border: 2px solid var(--white);
  background-color: transparent;
  width: 120px;
  height: 40px;
  position: absolute;
  bottom: 10%;
`;
function MainHeader() {
  return (
    <BackgroundImg>
      <TextContainer>
        <header>
          made by me:
          <br />
          caker!
        </header>
        <p>케이커와 함께하는 특별한 하루</p>
        <ServiceIntro>서비스 소개</ServiceIntro>
      </TextContainer>
    </BackgroundImg>
  );
}

export default MainHeader;
