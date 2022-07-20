import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import PageTitle from "../components/PageTitle";
import mainImg from "../images/TempShopImage.png";
import modifyImg from "../images/ModifyInfo.svg";
import moreIcon from "../images/MoreIcon.svg";
import { DetailInfoCard } from "../components/DetailInfoCard";
import DetailInfoItem from "../components/DetailInfoItem";
import { useNavigate } from "react-router-dom";

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

const SubTitle = styled.div`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  color: var(--main-pink);
`;

// 가게 이름, 등록 여부, 수정 버튼
const ShopDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ShopName = styled.span`
  color: var(--black);
  font-size: 28px;
  font-weight: bold;
  margin: 0 10px 0 0;
`;
const IsRegistered = styled.span`
  color: var(--sub-darkgray);
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
  const navigator = useNavigate();
  const [openMore, setOpenMore] = useState([{}, {}]);
  const getMoreDesc = () => {
    if (Object.keys(openMore[0]).length === 0) {
      setOpenMore([{ WebkitLineClamp: "100" }, { transform: "scaleY(-1)" }]);
    } else setOpenMore([{}, {}]);
  };
  return (
    <div>
      <TopBar />
      <PageTitle title="가게 상세정보" margin="60px 0 63px 0" />
      <PaddingBox>
        <MainImage imgUrl={mainImg} height="300px" />
        <HorizonEmptySpace height="30px" />
        <ShopDetailHeader>
          <div>
            <ShopName>달다구리</ShopName>
            <IsRegistered>등록가게</IsRegistered>
          </div>
          <ModifyIcon
            className="modify-info"
            onClick={() => navigator("/shopmodify")}
          />
          {/* 권한이 있을 때만 이 아이콘이 나타나도록 */}
        </ShopDetailHeader>
        <HorizonEmptySpace height="45px" />
        <SubTitle>소개</SubTitle>
        <HorizonEmptySpace height="12px" />
        <ShopDesc style={openMore[0]} onClick={getMoreDesc}>
          달다구리는 다양한 상황과 감정을 케이크로 표현할 수 있는 아이디어를 늘
          상상하고 고민합니다. 다양한 상황에 전하고 싶은 메시지를 찾아
          디자인하고자 하는 달다구리는 벌써 고객님들과 함께한지 10년이
          되었습니다.
        </ShopDesc>
        <AlignCenterBox>
          <MoreIcon style={openMore[1]} onClick={getMoreDesc} />
        </AlignCenterBox>
        <HorizonEmptySpace height="35px" />
        <DetailInfoCard>
          <DetailInfoItem category="전화번호" content="02-336-5856" fontSize="16px" />
          <DetailInfoItem category="주소" content="서울 마포구 양화로18안길 22 2층 터틀힙" fontSize="16px" />
          <DetailInfoItem category="운영시간" content="매일 12:00~20:00" fontSize="16px" />
          <DetailInfoItem category="문의" content="카카오톡 | 인스타그램" fontSize="16px" />
        </DetailInfoCard>
        <HorizonEmptySpace height="48px" />
        <SubTitle>대표 케이크</SubTitle>
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
