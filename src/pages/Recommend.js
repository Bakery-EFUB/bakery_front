import React from "react";
import styled from "styled-components";
import BigCardDisplay from "../components/BigCardDisplay";
import PageTitle from "../components/PageTitle";
import TopBar from "../components/TopBar";

const RecommendContainer = styled.div`
  margin: 0 5%;
`;

const Recommend = () => {
  return (
    <>
      <TopBar></TopBar>
      <RecommendContainer>
        <PageTitle title="가게 추천" margin="60px 0 63px 0" />
        <BigCardDisplay
          MainText="달다구리"
          SubText="등록 가게"
        ></BigCardDisplay>
      </RecommendContainer>
    </>
  );
};

export default Recommend;
