import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/Common/Sidebar/TopBar";
import PageTitle from "../components/PageTitle";
import mainImg from "../images/TempShopImage.png";
import modifyImg from "../images/ModifyInfo.svg";
import moreIcon from "../images/MoreIcon.svg";
import { DetailInfoCard } from "../components/DetailInfoCard";
import DetailInfoItem from "../components/DetailInfoItem";
import {useNavigate, useParams} from "react-router-dom";

/////////////// 테스트를 위한 객체 -> 이후 삭제 예정 /////////////
const TEMP_USER_ID = 3;
const shopDetail = {
  id: 1, //store db id(long)
  owner: {
    //사장 프로필
    memberId: 2,
    kakaoId: 2996125025,
    nickname: "bakery",
    email: "efub@kakao.com",
    image: "mainImg",
    authority: "BAKER",
    deleteFlag: false,
  },
  ownerName: "bakery", //사장 이름(string)
  name: "가게 이름", //(string)
  mainImg: mainImg, //(string)
  readme:
    "달다구리는 다양한 상황과 감정을 케이크로 표현할 수 있는 아이디어를 늘 상상하고 고민합니다. 다양한 상황에 전하고 싶은 메시지를 찾아 디자인하고자 하는 달다구리는 벌써 고객님들과 함께한지 10년이 되었습니다.", //string
  address: "가게 주소", //string
  kakaoUrl: "가게 카카오 프로필 링크", //string
  instagram: "인스타그램 주소", //string
  certifyFlag: true, //가게 인증 여부 (boolean)
  openTime: "가게 오픈 시간", //string
  phoneNumber: "전화번호", //string
  menuImg: [mainImg, mainImg],
};

const PaddingBox = styled.div`
  padding: 0 24px 60px;
`;
const HorizonEmptySpace = styled.div`
  height: ${props => props.height};
`;

// 이미지
const MainImage = styled.div`
  height: ${props => props.height};
  background: ${props => `url(${props.imgUrl}) center/cover no-repeat`};
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
<<<<<<< HEAD
  height: 110px;
=======
  height: 120px;
>>>>>>> main
  background: ${props => `url(${props.imgUrl}) center/cover no-repeat`};
  border-radius: 6px;
`;

const ShopDetailPage = () => {
  const { storeId } = useParams();
  // const [shopDetail, setShopDetail] = useState({});
  // const loadShopDetailData = async () => {
  //   const store_id = 'MyStore'; // 수정 필요
  //   const response = await axios
  //     .get(`/stores/${storeId}`)
  //     .then((res) => setShopDetail(res.data))
  //     .catch(e => console.error(e));
  // };
  // useEffect(() => {
  //   //loadShopDetailData();
  // }, []);

  const getMoreInfoSNSLinkElement = (kakao, insta) => {
    return (
      <>
        <a href={kakao}>카카오톡 채널</a>
        &nbsp;|&nbsp;
        <a href={insta}>인스타그램</a>
      </>
    );
  };
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
        <MainImage imgUrl={shopDetail.mainImg} height="300px" />
        <HorizonEmptySpace height="30px" />
        <ShopDetailHeader>
          <div>
            <ShopName>{shopDetail.name}</ShopName>
            <IsRegistered>
              {shopDetail.certifyFlag ? "등록가게" : "미등록가게"}
            </IsRegistered>
          </div>
          {shopDetail.owner.memberId === TEMP_USER_ID &&
            <ModifyIcon
              className="modify-info"
              onClick={() => navigator("/shopmodify")}
            />
          }
        </ShopDetailHeader>
        <HorizonEmptySpace height="45px" />
        <SubTitle>소개</SubTitle>
        <HorizonEmptySpace height="12px" />
        <ShopDesc style={openMore[0]} onClick={getMoreDesc}>
          {shopDetail.readme}
        </ShopDesc>
        <AlignCenterBox>
          <MoreIcon style={openMore[1]} onClick={getMoreDesc} />
        </AlignCenterBox>
        <HorizonEmptySpace height="35px" />
        <DetailInfoCard>
          <DetailInfoItem
            category="전화번호"
            content={shopDetail.phoneNumber}
            fontSize="16px" />
          <DetailInfoItem
            category="주소"
            content={shopDetail.address}
            fontSize="16px" />
          <DetailInfoItem
            category="운영시간"
            content={shopDetail.openTime}
            fontSize="16px"
          />
          <DetailInfoItem
            category="문의"
            content={getMoreInfoSNSLinkElement( shopDetail.kakaoUrl, shopDetail.instagram )}
            fontSize="16px"
          />
        </DetailInfoCard>
        <HorizonEmptySpace height="48px" />
        <SubTitle>대표 케이크</SubTitle>
        <HorizonEmptySpace height="30px" />
        <CakeImages>
          {shopDetail.menuImg.map((imgUrl, idx) => (
            <CakeProductImage imgUrl={imgUrl} key={idx} />
          ))}
        </CakeImages>
      </PaddingBox>
    </div>
  );
};

export default ShopDetailPage;
