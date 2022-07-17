import React from "react";
import styled from "styled-components";
import NoResultImg from "../../images/NoResult.svg";

const NoResultContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 30%;
`;

const NoResultIcon = styled.div`
  background: url(${NoResultImg});
  height: 176px;
  width: 191.66px;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 5%;
`;

const NoResultText = styled.div`
  color: var(--main-pink);
`;
const NoResult = () => {
  return (
    <NoResultContainer>
      <NoResultIcon></NoResultIcon>
      <NoResultText>검색 결과가 없어요</NoResultText>
    </NoResultContainer>
  );
};

export default NoResult;
