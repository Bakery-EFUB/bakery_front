import React from "react";
import styled from "styled-components";
import BoxLine from "../../images/BoxLine.svg";
import Mock from "../../images/Mock.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Oneproposal = styled.div`
  display: flex;
  flex-direction: row;
`;
const CakeImg = styled.div`
  background: url(${image});
  border-radius: 15%;
  margin: 15px;
`;
const MockImg = styled.div`
  background: url(${Mock});
  border-radius: 15%;
  margin: 15px;
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
const Hashtag = styled.div`
  color: var(--main-pink);
  font-family: "Apple SD Gothic Neo";
  font-size: 10px;
`;
const HashtagBox = styled.div`
  margin-top: 17%;
  display: flex;
  flex-direction: row;
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
export function timeForToday(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
      return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};
const ProposalBox = ({key, description, time, hashtag, image}) => {
  return (
    <Container>
      <Oneproposal>
          {image ? <CakeImg></CakeImg> : <MockImg></MockImg>}
        <Textbox>
          <Title>{key}</Title>
          <Description>{description}</Description>
          <HashtagBox>
            <Hashtag>{hashtag}</Hashtag>
          </HashtagBox>
        </Textbox>
        <Timeshow><timeForToday value = {time}/></Timeshow>
      </Oneproposal>
      <Line src={BoxLine} />
    </Container>
  );
};
export default ProposalBox;
