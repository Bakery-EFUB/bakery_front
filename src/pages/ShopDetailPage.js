import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import PageTitle from "../components/PageTitle";
import mainImg from "../images/TempShopImage.png";
import modifyImg from "../images/ModifyInfo.svg";
import moreIcon from "../images/MoreIcon.svg";

const PaddingBox = styled.div`
  padding: 0 24px 60px;
`;
const HorizonEmptySpace = styled.div`
  height: ${(props) => props.height};
`;

// 이미지
const MainImage = styled.div`
  height: ${(props) => props.height};
  background: ${(props) => `url(${props.imgUrl}) center/cover no-repeat`};
  border-radius: 6px;
`;

// 가게 이름, 등록 여부, 수정 버튼
const ShopDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ShopName = styled.span`
  color: #202020;
  font-size: 28px;
  font-weight: bold;
  margin: 0 10px 0 0;
`;
const IsRegistered = styled.span`
  color: #949494;
  font-size: 14px;
`;
const ModifyIcon = styled.span`
  width: 22.15px;
  background: url(${modifyImg}) center/100% no-repeat;
`;

// 가게 설명
const ShopDesc = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
`;
const AlignCenterBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;
const MoreIcon = styled.div`
  width: 16px;
  height: 8px;
  background: url(${moreIcon}) center/100% no-repeat;
`;

// 가게 세부 정보
const ItemBox = styled.div`
  display: flex;
  font-size: 16px;
  & + & {
    margin-top: 30px;
  }
`;
const Category = styled.div`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  color: #ff7b72;
`;
const Content = styled.div`
  width: 100%;
  font-size: 16px;
  color: #202020;
  word-break: keep-all;
`;
const ShopInfo = styled.div`
  background-color: #ffebea;
  border-radius: 6px;
  padding: 22px 16px;
`;
const ShopDetailItem = ({ category, content }) => {
  return (
    <ItemBox>
      <Category>{category}</Category>
      <Content>{content}</Content>
    </ItemBox>
  );
};

const CakeImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 2%;
`;
const CakeProductImage = styled.div`
  width: 32%;
  height: 120px;
  background: ${(props) => `url(${props.imgUrl}) center/cover no-repeat`};
  border-radius: 6px;
`;

const ShopDetailPage = () => {
  const [openMore, setOpenMore] = useState([{}, {}]);
  const getMoreDesc = () => {
    if (Object.keys(openMore[0]).length === 0) {
      setOpenMore([{ WebkitLineClamp: "100" }, { transform: "scaleY(-1)" }]);
    } else setOpenMore([{}, {}]);
  };
  return (
    <div>
      <TopBar />
      <PageTitle title="가게 상세정보" />
      <PaddingBox>
        <MainImage imgUrl={mainImg} height="300px" />
        <HorizonEmptySpace height="30px" />
        <ShopDetailHeader>
          <div>
            <ShopName>달다구리</ShopName>
            <IsRegistered>등록가게</IsRegistered>
          </div>
          <ModifyIcon className="modify-info" />{" "}
          {/* 권한이 있을 때만 이 아이콘이 나타나도록 */}
        </ShopDetailHeader>
        <HorizonEmptySpace height="45px" />
        <Category>소개</Category>
        <HorizonEmptySpace height="12px" />
        <ShopDesc style={openMore[0]}>
          달다구리는 다양한 상황과 감정을 케이크로 표현할 수 있는 아이디어를 늘
          상상하고 고민합니다. 다양한 상황에 전하고 싶은 메시지를 찾아
          디자인하고자 하는 달다구리는 벌써 고객님들과 함께한지 10년이
          되었습니다.
        </ShopDesc>
        <AlignCenterBox>
          <MoreIcon style={openMore[1]} onClick={getMoreDesc} />
        </AlignCenterBox>
        <HorizonEmptySpace height="35px" />
        <ShopInfo>
          <ShopDetailItem category="전화번호" content="02-336-5856" />
          <ShopDetailItem category="주소" content="서울 마포구 양화로18안길 22 2층 터틀힙" />
          <ShopDetailItem category="운영시간" content="매일 12:00~20:00" />
          <ShopDetailItem category="문의" content="카카오톡 | 인스타그램" />
        </ShopInfo>
        <HorizonEmptySpace height="48px" />
        <Category>대표 케이크</Category>
        <HorizonEmptySpace height="30px" />
        <CakeImages>
          <CakeProductImage imgUrl={mainImg} />
          <CakeProductImage imgUrl={mainImg} />
          <CakeProductImage imgUrl={mainImg} />
          <CakeProductImage imgUrl={mainImg} />
          <CakeProductImage imgUrl={mainImg} />
          <CakeProductImage imgUrl={mainImg} />
        </CakeImages>
      </PaddingBox>
    </div>
  );
};

export default ShopDetailPage;
