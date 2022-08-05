import React from "react";
import styled from "styled-components";
import BoxLine from "../../images/BoxLine.svg";
import Mock from "../../images/Mock.svg";
import Moment from "react-moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Oneproposal = styled.div`
  display: flex;
  flex-direction: row;
`;
const CakeImg = styled.img`
  border-radius: 15%;
  margin: 15px;
  width: 20%;
  height: 20%;
`;
const Textbox = styled.div`
  border-left: 15px;
  flex-direction: column;
  width: 250px;
  height: 100px;
`;
const Title = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-family: "Apple SD Gothic Neo";
  margin-top: 5%;
`;
const Description = styled.div`
  color: black;
  font-family: "Apple SD Gothic Neo";
  margin-bottom: 5%;
  font-size: 15px;
`;
const Timeshow = styled.div`
  color: var(--sub-darkgray);
  font-family: "Apple SD Gothic Neo";
  margin: 3%;
  font-size: 10px;
`;
const Line = styled.img`
  margin: 1%;
`;
const displayCreatedAt = (createdAt) => {
  let startTime = new Date(createdAt);
  let nowTime = Date.now();
  if (parseInt(startTime - nowTime) > -60000) {
    return <Moment format="방금 전">{startTime}</Moment>;
  }
  if (parseInt(startTime - nowTime) < -86400000) {
    return <Moment format="MMM D일">{startTime}</Moment>;
  }
  if (parseInt(startTime - nowTime) > -86400000) {
    return <Moment fromNow>{startTime}</Moment>;
  }
};

const ProposalBox = ({key, title, description, time, image}) => {
  return (
    <Container>
      <Oneproposal>
          <CakeImg src = {image}></CakeImg>
        <Textbox>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Textbox>
        <Timeshow> {displayCreatedAt(time)}</Timeshow>
      </Oneproposal>
      <Line src={BoxLine} />
    </Container>
  );
};
export default ProposalBox;
