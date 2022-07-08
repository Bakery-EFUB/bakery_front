import React from "react";
import styled from "styled-components";
//임시
import MoreIcon from "../../images/MoreInfo.svg";
import Card from "./Card";

const CardDisplayContainer = styled.div`
  margin-left: 5%;
`;

const Header = styled.div`
  display: flex;
  margin: 10% 5% 3% 0;
  align-items: center;
  justify-content: space-between;
  color: var(--main-pink);
  writing-mode: horizontal-tb;
`;

const Menu = styled.div`
  font-size: 23px;
  font-weight: 800;
`;

const Body = styled.div`
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MoreInfoIcon = styled.div`
  background: url(${MoreIcon});
  width: 9px;
  height: 13px;
  margin-left: 5px;
`;
const SeeAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardDisplay = ({ title }) => {
  return (
    <CardDisplayContainer>
      <Header>
        <Menu>{title}</Menu>
        <SeeAll>
          전체보기<MoreInfoIcon></MoreInfoIcon>
        </SeeAll>
      </Header>
      <Body>
        <Card title="북아현동" subtitle="#스승의날"></Card>
        <Card title="북아현동" subtitle="#스승의날"></Card>
        <Card title="북아현동" subtitle="#스승의날"></Card>
      </Body>
    </CardDisplayContainer>
  );
};

export default CardDisplay;
