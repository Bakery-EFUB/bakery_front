import React from "react";
import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.svg";

const SearchBar = ({ text }) => {
  const SearchBarContainer = styled.div`
    border-radius: 6px;
    background-color: var(--sub-lightpink);
  `;
  return (
    <div>
      <SearchBarContainer>{text}</SearchBarContainer>
    </div>
  );
};

export default SearchBar;
