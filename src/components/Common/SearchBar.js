import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../../images/SearchIcon.svg";
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
  font-size: 18px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--main-pink);
    font-size: 18px;
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

const SearchBar = ({ text }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const onChangeSearchText = e => {
    setSearchText(e.target.value);
  };

  const onClickSearch = () => {
    navigate("/search", {
      state: {
        searchText: searchText,
      },
    });
  };

  return (
    <SearchContainer>
      <Search onClick={onClickSearch}></Search>
      <SearchBarContainer placeholder={text} onChange={onChangeSearchText} />
    </SearchContainer>
  );
};

export default SearchBar;
