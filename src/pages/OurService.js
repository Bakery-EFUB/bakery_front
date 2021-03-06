import React from "react";
import styled from "styled-components";
import ServiceBackground from "../images/ServiceBackground.svg";
import TopBar from "../components/Common/Sidebar/TopBar";
import WeAreCakers from "../images/WeAreCakers.svg";
import ServiceTitle from "../images/ServiceTitle.svg";
import DescriptionText from "../images/DescriptionText.svg";

const ContentBoxWithMargin = styled.div`
    margin-left : 3px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const BackGroundImg = styled.div`
  background: url(${ServiceBackground});
  background-repeat: no-repeat;
  width: 100%;
  margin-top: 23%;
  height: 1379.12px;
  z-index: -1;
`;
const StartText = styled.div`
  color: var(--main-pink);
  font-size: 20px;
  margin-left: 5%;
  margin-top: -1400px;
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
  margin-left: 5%;
  margin-top: 5%;
  z-index: 0;
  width: 230px;
  height: 73px;
`;
const TitleText1 = styled.div`
  color: black;
  font-weight: 10%;
  font-size: 40px;
  margin-left: 5%;
  margin-top: 20%;
  font-family: "Apple SD Gothic Neo";
  z-index: 0;
`;
const DescriptionBox1 = styled.div`
  margin-top: 9%;
  margin-left: 5%;
  display: flex;
  z-index: 0;
`;
const Description2 = styled.div`
  color: black;
  font-size: 16px;
  margin-top: 2%;
  font-family: "Apple SD Gothic Neo";
  white-space: wrap;
  z-index: 0;
`;
const TitleText2 = styled.div`
  color: black;
  font-weight: 10%;
  font-size: 37px;
  margin-top: 80%;
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
  color: black;
  font-size: 16px;
  margin-top: 2%;
  font-family: "Apple SD Gothic Neo";
  white-space: wrap;
  z-index: 0;
`;
const LastImg = styled.img`
  margin-top: 120%;
  margin-left: 12%;
  width: 300px;
  height: 48px;
`;
const ButtonContainer = styled.div`
  margin-top: 15%;
  align-items: center;
  size: 100%;
`;
const Button = styled.button`
  width: 380px;
  height: 60px;
  margin-top: 10%;
  margin-left: 5px;
  margin-right: 5px;

  margin-bottom: 10px;
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
  line-height: 22px;
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
        <ContentBoxWithMargin>
            <Container>
                    <BackGroundImg></BackGroundImg>
                    <StartText>????????? ?????? ?????????,</StartText>
                    <StartLogo src={ServiceTitle} />
                    <Description1 src={DescriptionText} />
                    <TitleText1>A special day maker</TitleText1>
                    <DescriptionBox1>
                        <Description2>
                            ???????????? ?????? ????????? ????????? ??????????????????.
                        <br />
                           <br />
                            ???????????? ??????????????? ????????? ?????? ????????????
                            <br />
                            <br />
                            ???????????? ?????? ??? ????????? ????????????.
                        </Description2>
                    </DescriptionBox1>
                    <TitleText2>For your sweet day</TitleText2>
                <DescriptionBox2>
                    <Description3>
                        ????????? ???????????? ????????? ????????? ???????????????.
                        <br />
                        <br />
                        ????????? ????????? ?????? ?????????,
                        <br />
                        <br />
                     ??????????????? ???????????????!
                    </Description3>
                </DescriptionBox2>
                <LastImg src={WeAreCakers} />
            </Container>
            <ButtonContainer>
                <BigPinkButton>????????? ????????????</BigPinkButton>
            </ButtonContainer>
        </ContentBoxWithMargin>
    </div>
  );
};
export default OurService;
