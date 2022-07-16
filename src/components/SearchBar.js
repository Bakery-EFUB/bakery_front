import React from "react";
import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.svg";

const SearchBar = ({ text }) => {
  const SearchBarContainer = styled.div`
    border-radius: 6px;
    width: 100%;
    height: 50px;
    background-color: var(--sub-lightpink);
  `;

  const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    p {
      color: var(--main-pink);
      font-weight: 500;
      font-family: "AppleSDGothicNeo";
    }
  `;

  const SearchLogo = styled.div`
    background: url(${SearchIcon});
    width: 21.29px;
    height: 21.29px;
    margin-right: 15px;
  `;

  return (
    <div>
      <SearchBarContainer>
        <Content>
          <SearchLogo></SearchLogo>
          <p>{text}</p>
        </Content>
      </SearchBarContainer>
    </div>
  );
};

export default SearchBar;
