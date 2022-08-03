import TopBar from "../components/Common/Sidebar/TopBar";
import styled from "styled-components";
import UserLogoimg from "../images/UserLogo.svg";
import Readingimg from "../images/Reading.svg";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

//전체 크기
const WrapBox = styled.div`
  width: 428px;
`;

//연핑크 박스
const PinkBox = styled.div`
  background-color: var(--sub-pink);
  margin-top: 120px;
  width: 428px;
  height: 670.09px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//유저 이미지
const UserImg = styled.div`
  background: url(${UserLogoimg});
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: absolute;
  width: 100px;
  height: 100px;
  left: 24.21px;
  top: 210.91px;
`;

//유저 닉네임
const UserName = styled.div`
  position: absolute;
  width: 114.57px;
  height: 24px;
  left: 139px;
  top: 230.7px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

//caker 가게 회원
const UserPlace = styled.h1`
  position: absolute;
  width: 195.31px;
  height: 30.31px;
  left: 139px;
  top: 270.91px;
  font-family: "ITC Avant Garde Gothic";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

//계정 관리
const CountManager = styled.div`
  position: absolute;
  width: 57px;
  height: 14px;
  left: 349.69px;
  top: 280.7px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;
const CertifyBox = styled.div`
  margin-top: 108.53px;
  display: flex;
  margin-right: 230px;
`;

//가게 인증
const Completion = styled.div`
  width: 70px;
  height: 19px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

//미완료
const Progress = styled.div`
  width: 70px;
  height: 19px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--sub-darkgray);
`;

//핑크 버튼
const Button = styled.button`
  width: 380px;
  height: 100px;
  margin-top: 20px;
  color: var(--main-pink);
  background: var(--sub-yellow);
  border-radius: 6px;
  border-style: none;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;

//참고
const Reading = styled.div`
  background: url(${Readingimg});
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin-top: 28.18px;
  width: 280px;
  height: 34px;
  line-height: 17px;
`;

const ShopMypageProgressive = () => {
  const [Mydatas, setMyData] = useState([]);
  const getData = () => {
    axios
      .get("https://caker.shop/stores/myStore")
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
      <PageTitle title="마이페이지" margin="70.06px" />
      <UserName>
        {Mydatas.map(Mydata => (
          <div key={Mydata.id}>{Mydata.owner.nickname}</div>
        ))}
      </UserName>
      <UserPlace>Caker 가게 회원</UserPlace>
      <UserImg></UserImg>
      <PinkBox>
        <CountManager>계정 관리 &gt;</CountManager>
        <CertifyBox>
          <Completion>가게 인증</Completion>
          <Progress>진행중</Progress>
        </CertifyBox>
        <Link to="/shop/register">
          <Button>가게 정보 등록하기</Button>
        </Link>
        <Reading />
      </PinkBox>
    </WrapBox>
  );
};

export default ShopMypageProgressive;
