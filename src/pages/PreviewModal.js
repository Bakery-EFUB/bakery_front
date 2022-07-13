import styled from "styled-components";
import mainImg from "../images/TempShopImage.png";
import { DetailInfoCard } from "../components/DetailInfoCard";
import DetailInfoItem from "../components/DetailInfoItem";

const PreventClickBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
`;

const WhiteModal = styled.div`
  position: absolute;
  padding: 19px;
  background-color: var(--white);
  border-radius: 6px;
  border: solid 1.5px var(--background);
  top: 255px;
  left: 24px;
  right: 24px;
`;

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

const CakeImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 2%;
`;
const CakeProductImage = styled.div`
  width: 32%;
  height: 100px;
  background: ${(props) => `url(${props.imgUrl}) center/cover no-repeat`};
  border-radius: 6px;
`;

const CloseButton = styled.button`
  color: var(--main-pink);
  background-color: var(--white);
  height: 60px;
  font-size: 18px;
  border: solid 1.5px var(--main-pink);
  border-radius: 6px;
  width: 100%;
`;

const HorizonEmptySpace = styled.div`
  height: ${(props) => props.height};
`;

const PreviewModal = () => {
  return (
    <>
      <PreventClickBackground />
      <WhiteModal>
        <MainImage imgUrl={mainImg} height="300px" />
        <HorizonEmptySpace height="30px" />
        <ShopDetailHeader>
          <div>
            <ShopName>달다구리</ShopName>
            <IsRegistered>등록가게</IsRegistered>
          </div>
        </ShopDetailHeader>
        <HorizonEmptySpace height="45px" />
        <SubTitle>소개</SubTitle>
        <HorizonEmptySpace height="12px" />
        <ShopDesc>
          달다구리는 다양한 상황과 감정을 케이크로 표현할 수 있는 아이디어를 늘
          상상하고 고민합니다. 다양한 상황에 전하고 싶은 메시지를 찾아
          디자인하고자 하는 달다구리는 벌써 고객님들과 함께한지 10년이
          되었습니다.
        </ShopDesc>
        <HorizonEmptySpace height="35px" />
        <DetailInfoCard>
          <DetailInfoItem
            category="전화번호"
            content="02-336-5856"
            fontSize="14px"
          />
          <DetailInfoItem
            category="주소"
            content="서울 마포구 양화로18안길 22 2층 터틀힙"
            fontSize="14px"
          />
          <DetailInfoItem
            category="운영시간"
            content="매일 12:00~20:00"
            fontSize="14px"
          />
          <DetailInfoItem
            category="문의"
            content="카카오톡 | 인스타그램"
            fontSize="14px"
          />
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
        <HorizonEmptySpace height="60px" />
        <CloseButton>닫기</CloseButton>{" "}
        {/*onClick= {state 수정해서 팝업 닫기}*/}
      </WhiteModal>
    </>
  );
};

export default PreviewModal;
