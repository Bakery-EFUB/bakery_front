import TopBar from "../components/TopBar";
import styled from "styled-components";
import UserLogoimg from "../images/UserLogo.svg";
import CountManageimg from "../images/CountManage.svg";
import Readingimg from "../images/Reading.svg";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const WrapBox = styled.div`
  width: 428px;
`;
const Box = styled.div`
  background-color: var(--sub-pink);
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
  background: var(--main-pink);
  border-radius: 6px;
  border: 0.1px solid var(--main-pink);
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
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
  background: ${props => `url(${props.img}) center/cover no-repeat`};
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
  color: var(--main-pink);
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
  const [Mydatas, setMyData] = useState([]);
  const getData = () => {
    axios
      .get("https://caker.shop/stores")
      .then(Response => {
        console.log("받아오기 성공", Response.data);
        setMyData(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <WrapBox>
      <TopBar></TopBar>
      <PageTitle title="마이페이지" margin="56px 0px 0px 0px" />
      <UserName>
        {Mydatas.map(Mydata => (
          <div key={Mydata.id}>{Mydata.owner.nickname}</div>
        ))}
      </UserName>
      <CountManager></CountManager>
      <UserPlace>Caker 가게 회원</UserPlace>
      <UserLogo></UserLogo>
      <Box className="BottomPinkBackground">
        <Completion>가게 인증</Completion>
        <Progress>미완료</Progress>
        <Link to="/shopregister">
          <Button>가게 정보 등록하기</Button>
        </Link>

        <Reading></Reading>
      </Box>
    </WrapBox>
  );
};

export default ShopMypageStart;
