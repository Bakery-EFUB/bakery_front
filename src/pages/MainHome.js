import React from "react";
import SearchBar from "../components/SearchBar";
import TopBar from "../components/TopBar";
import MainBackground from "../images/MainBackground.svg";
import CardDisplay from "../components/CardDisplay/CardDisplay.js";
import styled from "styled-components";
import Card from "../components/CardDisplay/Card";

const HomeContainer = styled.div`
  margin: 0 5%;
`;

const BackgroundImg = styled.div`
  background: url(${MainBackground});
  width: 100%;
  height: 216px;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 20px;
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
`;

const MainHome = () => {
  return (
    <div>
      <TopBar></TopBar>
      <HomeContainer>
        <SearchBar text={"케이크, 가게 검색"} />
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
      </HomeContainer>
      <CardDisplay title="가게 추천"></CardDisplay>
    </div>
  );
};

export default MainHome;
