import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../../components/Common/SearchBar";
import NoResult from "../../components/SearchResult/NoResult";
import SearchResult from "../../components/SearchResult/SearchResult";
import TopBar from "../../components/Common/Sidebar/TopBar";
import { GetStoreSearchResult } from "../../api/store";

const SearchPageContainer = styled.div`
  margin: 0 5%;
`;

const ResultText = styled.div`
  color: var(--main-pink);
  margin: 10% 0;
`;

const SearchPage = () => {
  const location = useLocation();
  const searchText = location.state.searchText;
  const [resultNum, setResultNum] = useState(0);
  const [allSearchResult, setAllSearchResult] = useState([]);

  const searchApi = () => {
    GetStoreSearchResult(searchText)
      .then(data => {
        setAllSearchResult(data);
        setResultNum(data.length);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    searchApi();
  }, [searchText]);

  return (
    <>
      <TopBar></TopBar>
      <SearchPageContainer>
        <SearchBar text="케이크, 가게 검색"></SearchBar>

        <ResultText>검색 결과 {resultNum}</ResultText>
        {resultNum ? (
          <SearchResult searchResult={allSearchResult}></SearchResult>
        ) : (
          <NoResult></NoResult>
        )}
      </SearchPageContainer>
    </>
  );
};

export default SearchPage;
