import React from "react";
import styled from "styled-components";
//임시
import MoreIcon from "../../images/SearchIcon.svg";

const CardDisplayContainer = styled.div`
  margin-left: 5%;
  width: 5px;
  height: 11px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: var(--main-pink);
  writing-mode: horizontal-tb;
`;

const Body = styled.div``;
const MoreInfoIcon = styled.div`
  background: url(${MoreIcon});
  width: 5px;
  height: 10px;
`;

const CardDisplay = ({ title }) => {
  return (
    <CardDisplayContainer>
      <Header>
        <div>{title}</div>
        <div>
          <p>전체보기</p>
          <MoreInfoIcon></MoreInfoIcon>
        </div>
      </Header>
      <Body></Body>
    </CardDisplayContainer>
  );
};

export default CardDisplay;
