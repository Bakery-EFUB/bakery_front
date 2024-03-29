import React from "react";
import MainBackground from "../images/MainBackground.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackgroundImg = styled.div`
  background: url(${MainBackground}) no-repeat center center;
  width: 100%;
  max-width: 384px;
  height: 216px;
  margin: 23px auto 0 auto;
  border-radius: 6px;
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
  margin-top: 7%;
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
        <Link to="/about">
          <ServiceIntro>서비스 소개</ServiceIntro>
        </Link>
      </TextContainer>
    </BackgroundImg>
  );
}

export default MainHeader;
