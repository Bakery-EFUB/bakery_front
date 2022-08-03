import TopBar from "../../components/Common/Sidebar/TopBar";
import styled from "styled-components";

import PageTitle from "../../components/Proposal/PageTitle";

import UserLogoimg from "../../images/UserLogo.svg";
import Mock from "../../images/Mock.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import orderList from "../../_mock/orderImage.json";
import { userImage, userName } from "../../utils/auth";

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
  justify-content: center;
`;

//유저 이미지
const UserImg = styled.div`
  background: url(${props => props.ImageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  position: absolute;
  border-radius: 50%;
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

//핑크 버튼
const Button = styled.button`
  width: 380px;
  height: 60px;
  margin-top: 10px;
  color: var(--white);
  background: var(--main-pink);
  border-radius: 6px;
  border-style: none;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;

//제안서 글씨
const CommitProposal = styled.div`
  width: 137.05px;
  height: 19px;
  margin-top: 44.31px;
  margin-right: 240px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

//제안서 툴
const BottomProposal = styled.div`
  margin-top: 19px;
  width: 380.14px;
  height: 253.21px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//더보기
const MoreView = styled.div`
  margin-top: 19px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

//제안서 사진 방법1
const Article = styled.article`
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 120px;
  height: 120px;
  border: 1px solid pink;
  border-radius: 6px;
`;

const ShopMemberMyPage = () => {
  const [OrderImage, setOrderImage] = useState([]);
  console.log(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    console.log(orderList);
    setOrderImage(orderList["sheetResponseDTOs"]);
  }, []);

  return (
    <WrapBox>
      <TopBar></TopBar>
      <PageTitle title="마이페이지" margin="70.06px" />
      <UserName>{userName} 님</UserName>
      <CountManager>계정 관리 &gt;</CountManager>
      <UserPlace>Caker 일반 회원</UserPlace>
      <UserImg ImageUrl={userImage}></UserImg>
      <PinkBox>
        <Link to="/shopmodify">
          <Button>제안서 작성하기</Button>
        </Link>

        <CommitProposal>내 제안서</CommitProposal>
        <BottomProposal>
          {OrderImage.map(order => {
            return (
              <Article
                key={order.sheetId}
                title={order.locationDong}
                image={order.imageUrl}
                subtitle={order.hashtag}
              ></Article>
            );
          })}
        </BottomProposal>
        <MoreView>
          더보기
          <br />∨
        </MoreView>
      </PinkBox>
    </WrapBox>
  );
};

export default ShopMemberMyPage;
