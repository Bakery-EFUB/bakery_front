import React from "react";
import styled from "styled-components";
import SearchBar from "../../components/Common/SearchBar";
import TopBar from "../../components/Common/Sidebar/TopBar";
import MainHeader from "../../components/MainHeader";
import ShopDisplay from "../../components/HomeCardDisplay/ShopDisplay";
import OrderDisplay from "../../components/HomeCardDisplay/OrderDisplay";

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
      <ShopDisplay title="가게 추천"></ShopDisplay>
      <OrderDisplay title="제안서"></OrderDisplay>
    </div>
  );
};

export default MainHome;
