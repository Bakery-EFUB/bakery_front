import React from "react";
import styled from "styled-components";
import BigCard from "../../images/SearchResult.svg";

const ShopName = styled.span`
  color: var(--black);
  font-size: 23px;
  font-weight: bold;
  margin: 0 10px 0 0;
`;
const IsRegistered = styled.span`
  color: var(--sub-darkgray);
  font-size: 14px;
`;

const BigCardDisplay = ({ MainText, SubText, image = BigCard }) => {
  const BigCardImg = styled.div`
    background: url(${image});
    width: auto;
    height: 186px;
    border-radius: 6px;
    margin: 4% 0;
    background-repeat: no-repeat;
    background-position: center center;
  `;
  return (
    <>
      <BigCardImg></BigCardImg>
      <ShopName>{MainText}</ShopName>
      <IsRegistered>{SubText ? "등록" : "미등록"}</IsRegistered>
    </>
  );
};

export default BigCardDisplay;
