import React from "react";
import styled from "styled-components";
import ServiceBackground from "../../images/ServiceBackground.svg";
import TopBar from "../../components/Common/Sidebar/TopBar";
import WeAreCakers from "../../images/WeAreCakers.svg";
import ServiceTitle from "../../images/ServiceTitle.svg";
import DescriptionText from "../../images/DescriptionText.svg";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
const BackGroundImg = styled.div`
  background: url(${ServiceBackground});
  background-repeat: no-repeat;
  align-content: center;
  width: 403px;

  margin: 25px auto 0 auto;
  height: 100%;
  z-index: -1;

  display: flex;
  flex-direction: column;
`;
const StartText = styled.div`
  color: var(--main-pink);
  font-size: 20px;
  margin-left: 5%;
  margin-top: 53px;
  font-family: "Apple SD Gothic Neo";
  z-index: 0;
`;
const StartLogo = styled.img`
  margin-left: 5%;
  margin-top: 5%;
  z-index: 0;
  width: 181.29px;
  height: 45.98px;
`;
const Description1 = styled.img`
  // 케이커는 고객님과~
  margin-left: 5%;
  margin-top: 5px;
  z-index: 0;
  width: 230px;
  height: 73px;
`;
const TitleText1 = styled.div`
  color: black;
  font-weight: 10%;
  font-size: 40px;
  margin-left: 5%;
  margin-top: 60px;
  font-family: "Apple SD Gothic Neo";
  z-index: 0;
`;
const DescriptionBox1 = styled.div`
  margin-top: 9px;
  margin-left: 5%;
  display: flex;
  z-index: 0;
`;
const Description2 = styled.div`
  p {
    color: black;
    font-size: 16px;
    margin: 0;
    margin-top: 4px;
    font-family: "Apple SD Gothic Neo";
    white-space: wrap;
    z-index: 0;
  }
`;
const TitleText2 = styled.div`
  color: black;
  font-weight: 10%;
  font-size: 37px;
  margin-top: 333px;
  margin-left: 15%;
  font-family: "Apple SD Gothic Neo";
  z-index: 0;
`;
const DescriptionBox2 = styled.div`
  margin-top: 9%;
  margin-right: 5%;
  margin-left: 20%;
  display: flex;
  text-align: right;
  z-index: 0;
`;
const Description3 = styled.div`
  p {
    color: black;
    font-size: 16px;
    margin: 0;
    margin-top: 4px;
    font-family: "Apple SD Gothic Neo";
    white-space: wrap;
    z-index: 0;
  }
`;
const LastImg = styled.img`
  margin-top: 480px;
  margin-left: 12%;
  width: 300px;
  height: 48px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 380px;
  height: 60px;

  margin: 10px auto 30px auto;
  /* main pink */

  background: var(--main-pink);

  border: none;
  border-radius: 6px;

  box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);

  color: var(--sub-yellow);
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 60px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;
`;

const BigPinkButton = ({ children }) => {
  return <Button>{children}</Button>;
};
const OurService = () => {
  return (
    <div>
      <TopBar />

      <Container>
        <BackGroundImg>
          <StartText>특별한 하루 메이커,</StartText>
          <StartLogo src={ServiceTitle} />
          <Description1 src={DescriptionText} />
          <TitleText1>A special day maker</TitleText1>
          <DescriptionBox1>
            <Description2>
              <p> 케이커를 통해 특별한 하루를 만들어보세요.</p>
              <p>케이커는 고객님들이 상상한 모든 케이크를</p>
              <p> 구현하기 위해 늘 최선을 다합니다.</p>
            </Description2>
          </DescriptionBox1>
          <TitleText2>For your sweet day</TitleText2>
          <DescriptionBox2>
            <Description3>
              <p>나만의 케이크로 달콤한 하루를 선사하세요.</p>
              <p>당신이 상상한 모든 케이크,</p>
              <p>케이커에서 만나보세요!</p>
            </Description3>
          </DescriptionBox2>
          <LastImg src={WeAreCakers} />
        </BackGroundImg>
      </Container>

      <BigPinkButton>제안서 작성하기</BigPinkButton>
    </div>
  );
};
export default OurService;
