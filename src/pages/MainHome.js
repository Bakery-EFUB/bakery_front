import React from "react";
import SearchBar from "../components/SearchBar";
import TopBar from "../components/TopBar";
import styled from "styled-components";

const MainHome = () => {
  const HomeContainer = styled.div`
    margin: 0 5%;
  `;
  return (
    <div>
      <TopBar></TopBar>
      <HomeContainer>
        <SearchBar text={"케이크, 가게 검색"} />
      </HomeContainer>
    </div>
  );
};

export default MainHome;
