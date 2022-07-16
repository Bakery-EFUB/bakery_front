import React from "react";
import SearchBar from "../components/SearchBar";
import TopBar from "../components/TopBar";
import CardDisplay from "../components/HomeCardDisplay/CardDisplay.js";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";

const HomeContainer = styled.div`
  margin: 0 5%;
`;

const MainHome = () => {
  return (
    <div>
      <TopBar></TopBar>
      <HomeContainer>
        <SearchBar text={"케이크, 가게 검색"} />
        <MainHeader />
      </HomeContainer>
      <CardDisplay title="가게 추천"></CardDisplay>

      <CardDisplay title="가게 추천"></CardDisplay>
    </div>
  );
};

export default MainHome;
