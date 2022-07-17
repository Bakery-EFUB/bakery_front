import React from "react";
import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.svg";

const SearchBar = ({ text }) => {
  const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: var(--sub-lightpink);
    margin-top: 5%;
    border-radius: 6px;
    align-items: center;
  `;

  const SearchBarContainer = styled.input`
    border-style: none;
    color: var(--main-pink);
    background-color: var(--sub-lightpink);
    font-size:18px;
    :focus {
      outline: none;
    }
    ::placeholder{
      color:var(--main-pink)
      font-size:18px
    }
  `;

  const Search = styled.button`
    background: url(${SearchIcon});
    width: 21.29px;
    height: 21.29px;
    margin-right: 15px;
    border-style: none;
    margin-left: 5%;
  `;
  return (
    <SearchContainer>
      <Search></Search>
      <SearchBarContainer placeholder={text} />
    </SearchContainer>
  );
};

export default SearchBar;
