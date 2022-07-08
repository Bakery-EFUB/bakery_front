import React from "react";
import styled from "styled-components";
import Mock from "../../images/Mock.svg";

const CardComponent = styled.div`
  margin-right: 3%;
  :last-child {
    margin-right: 5%;
  }
`;
const MockImg = styled.div`
  background: url(${Mock});
  width: 150.08px;
  height: 114.11px;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 6px;
`;

const Title = styled.div`
  color: var(--black);
  font-weight: 800;
  font-size: 18px;
  margin: 2% 0;
`;
const SubTitle = styled.div`
  color: var(--main-pink);
  font-size: 14px;
`;

const Card = ({ title, subtitle }) => {
  return (
    <CardComponent>
      <MockImg></MockImg>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </CardComponent>
  );
};

export default Card;
