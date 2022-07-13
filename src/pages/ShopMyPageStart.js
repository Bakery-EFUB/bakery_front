import TopBar from "../components/TopBar";
import styled from "styled-components";
import UserLogoimg from "../images/UserLogo.svg";
import CountManageimg from "../images/CountManage.svg";
import Readingimg from "../images/Reading.svg";

const WrapBox = styled.div`
  width: 428px;
`;
const Box = styled.div`
  background-color: #ffebea;
  position: absolute;
  width: 428px;
  height: 619.09px;
  left: 0px;
  top: 306.91px;
`;

const Button = styled.button`
  position: absolute;
  width: 380px;
  height: 100px;
  left: 23.86px;
  top: 148.53px;
  color: white;
  background: #ff7b72;
  border-radius: 6px;
  border: 0.1px solid #fffbef;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;

const MypagePlace = styled.div`
  position: absolute;
  left: 166px;
  top: 160px;
  bottom: 0%;
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
`;

const CountManager = styled.div`
  background: url(${CountManageimg});
  background-repeat: no-repeat;
  position: absolute;
  width: 54px;
  height: 14px;
  left: 349.69px;
  top: 280.7px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
`;

const UserLogo = styled.div`
  background: url(${UserLogoimg});
  box-sizing: border-box;
  position: absolute;
  width: 99px;
  height: 99px;
  left: 24.21px;
  top: 261.91px;
  z-index: 1;
  background-repeat: no-repeat;
`;

const UserName = styled.div`
  position: absolute;
  width: 114.57px;
  height: 24px;
  left: 139px;
  top: 273.7px;
  text-align: left;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const Completion = styled.div`
  position: absolute;
  width: 70px;
  height: 19px;
  left: 29px;
  top: 108.53px;
  z-index: 1;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const Progress = styled.div`
  position: absolute;
  width: 70px;
  height: 19px;
  left: 112.26px;
  top: 108.53px;
  z-index: 1;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  /* sub text */

  color: #949494;
`;

const UserPlace = styled.h1`
  position: absolute;
  width: 195.31px;
  height: 30.31px;
  left: 139px;
  top: 305.91px;
  z-index: 1;
  text-align: left;
  font-family: "ITC Avant Garde Gothic";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

const Reading = styled.div`
  background: url(${Readingimg});
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: absolute;
  width: 280px;
  height: 34px;
  left: 73.9px;
  top: 276.09px;
  z-index: 1;
  line-height: 17px;
`;

const ShopMypageStart = () => {
  return (
    <WrapBox>
      <TopBar></TopBar>
      <MypagePlace>마이페이지</MypagePlace>
      <UserName>터틀힙 님,</UserName>
      <CountManager></CountManager>
      <UserPlace>Caker 가게 회원</UserPlace>
      <UserLogo></UserLogo>
      <Box className="BottomPinkBackground">
        <Completion>가게 인증</Completion>
        <Progress>미완료</Progress>
        <Button>가게 정보 등록완료</Button>
        <Reading></Reading>
      </Box>
    </WrapBox>
  );
};

export default ShopMypageStart;
