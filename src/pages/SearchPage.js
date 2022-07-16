import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import NoResult from "../components/SearchResult/NoResult";
import SearchResult from "../components/SearchResult/SearchResult";
import TopBar from "../components/TopBar";

const SearchPageContainer = styled.div`
  margin: 0 5%;
`;

const ResultText = styled.div`
  color: var(--main-pink);
  margin: 10% 0;
`;

const SearchPage = () => {
  const [resultNum, setResultNum] = useState(0);
  return (
    <>
      <TopBar></TopBar>
      <SearchPageContainer>
        <SearchBar text="케이크, 가게 검색"></SearchBar>

        <ResultText>검색 결과 {resultNum}</ResultText>
        {resultNum === 1 ? (
          <NoResult></NoResult>
        ) : (
          <SearchResult></SearchResult>
        )}
      </SearchPageContainer>
    </>
  );
};

export default SearchPage;
