import styled from "styled-components";
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

const PreviewModal = ({ storeData, mainImg, menuImg, onClick }) => {
  return (
    <>
      <PreventClickBackground />
      <WhiteModal>
        <MainImage imgUrl={mainImg} height="300px" />
        <HorizonEmptySpace height="30px" />
        <ShopDetailHeader>
          <div>
            <ShopName>{storeData.name}</ShopName>
            <IsRegistered>등록가게</IsRegistered>
          </div>
        </ShopDetailHeader>
        <HorizonEmptySpace height="45px" />
        <SubTitle>소개</SubTitle>
        <HorizonEmptySpace height="12px" />
        <ShopDesc>
          {storeData.readme}
        </ShopDesc>
        <HorizonEmptySpace height="35px" />
        <DetailInfoCard>
          <DetailInfoItem category="전화번호" content={storeData.phoneNumber} fontSize="14px" />
          <DetailInfoItem category="주소" content={storeData.address} fontSize="14px" />
          <DetailInfoItem category="운영시간" content={storeData.openTime} fontSize="14px" />
          <DetailInfoItem category="문의" content="카카오톡 | 인스타그램" fontSize="14px" />
        </DetailInfoCard>
        <HorizonEmptySpace height="48px" />
        <SubTitle>대표 케이크</SubTitle>
        <HorizonEmptySpace height="30px" />
        <CakeImages>
          {menuImg.map((img, idx)=>
            <CakeProductImage key={idx} imgUrl={img} />
          )}
        </CakeImages>
        <HorizonEmptySpace height="60px" />
        {/*onClick 수정페이지에서 팝업 열고 닫을 때 쓰는 setState*/}
        <CloseButton onClick={()=>onClick(false)}>닫기</CloseButton>{" "}
      </WhiteModal>
    </>
  );
};

export default PreviewModal;
