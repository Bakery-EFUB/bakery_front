import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopImgUpload from "../../components/Fileupload/ShopImgUpload";
import ShopMenuUpload from "../../components/Fileupload/ShopMenuUpload";
import TopBar from "../../components/Common/Sidebar/TopBar";
import { DetailInfoCard } from "../../components/DetailInfoCard";
import DetailInfoItem from "../../components/DetailInfoItem";

const WhiteModal = styled.div`
  margin: 70px 24.46px 90px 24.47px;
  height: 1263px;
  padding: 19px;
  background-color: var(--white);
  border-radius: 6px;
  border: solid 1.5px var(--background);
`;

//메인 이미지
const MainImages = styled.div`
  border-radius: 10px;
  width: 340px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${props => props.preview});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  background-size: contain;
  border-radius: 6px;
`;

//가게 소개
const SubTitle = styled.div`
  margin: 43px 276px 13px 0;
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  color: var(--main-pink);
`;

//틀
const ShopDetailHeader = styled.div`
  display: flex;
`;

//가게 이름
const ShopName = styled.span`
  color: var(--black);
  font-size: 28px;
  font-weight: bold;
  margin: 28.5px 10px 0 0;
`;

//등록 여부
const IsRegistered = styled.span`
  color: var(--sub-darkgray);
  font-size: 14px;
  margin: 35px 0 0 10px;
`;

// 가게 설명
const ShopDesc = styled.div`
  margin-bottom: 19px;
  width: 339px;

  font-size: 16px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CakeImages = styled.div`
  border-radius: 10px;
  width: 340px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CakeProductImage = styled.div`
  width: 300px;
  height: 300px;
  background: url(${props => props.preview});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  background-size: contain;

  border-radius: 6px;
`;

const CloseButton = styled.button`
  margin-top: 64.5px;
  color: var(--main-pink);
  background-color: var(--white);
  height: 60px;
  font-size: 18px;
  border: solid 1.5px var(--main-pink);
  border-radius: 6px;
  width: 100%;
`;

//전체
const WrapBox = styled.div`
  width: 428px;
  height: 1850px;
`;

//가게 정보 등록
const ShopRegistering = styled.div`
  width: 162px;
  height: 29px;
  margin: 56px 0px 60px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 1;
`;

//이름
const ShopIntroduceName = styled.div`
  width: 120px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

//인풋 칸
const ShopIntroduce = styled.input`
  width: 380px;
  height: ${props => props.height};
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: justify;
`;

//미리보기 버튼
const BeforeShowBtn = styled.button`
  margin: 70px 0px 0px 24px;
  background: var(--white);
  width: 180px;
  height: 60px;
  border: 1px solid var(--main-pink);
  border-radius: 6px;
  color: var(--main-pink);
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

//수정 버튼
const ModifyBtn = styled.button`
  margin: 70px 0px 0px 24px;
  background: var(--main-pink);
  width: 180px;
  height: 60px;
  border: 1px solid var(--main-pink);
  border-radius: 6px;
  color: white;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

//ui 구현
const ShopInformationModify = () => {
  const [Name, setName] = useState("");
  const [Readme, setReadme] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [OpenTime, setOpenTime] = useState("");
  const [KakaoUrl, setKakaoUrl] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [MainFile, setMainFile] = useState([]);
  const [MenuFile, setMenuFile] = useState([]);
  const [flip, setFlip] = useState(true);

  console.log(MainFile);
  console.log(MenuFile);

  let body = {
    storedata: {
      name: Name,
      readme: Readme,
      phoneNumber: PhoneNumber,
      address: Address,
      openTime: OpenTime,
      kakaoUrl: KakaoUrl,
      instagram: Instagram,
    },
    mainImage: MainFile,
    menuImage: MenuFile,
  };

  const NameHandler = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const ReadmeHandler = e => {
    e.preventDefault();
    setReadme(e.target.value);
  };
  const PhoneNumberHandler = e => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const AddressHandler = e => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const OpenTimeHandler = e => {
    e.preventDefault();
    setOpenTime(e.target.value);
  };
  const KakaoUrlHandler = e => {
    e.preventDefault();
    setKakaoUrl(e.target.value);
  };
  const InstagramHandler = e => {
    e.preventDefault();
    setInstagram(e.target.value);
  };
  const MainFileHandler = e => {
    e.preventDefault();
    setShopFile(e.tartget.value);
  };
  const MenuFileHandler = e => {
    e.preventDefault();
    setMenuFile(e.tartget.value);
  };
  const onPreview = e => {
    e.preventDefault();
    setFlip(!flip);
  };

  //제출 -> 백엔드로 post
  const submitHandler = e => {
    e.preventDefault();

    FormData.append("data", JSON.stringify(body));

    const postSurvey = axios({
      method: "POST",
      url: "https://caker.shop/stores/myStore",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    console.log(postSurvey);
  };
  if (flip == true) {
    return (
      <WrapBox>
        <TopBar />
        <form onSubmit={submitHandler}>
          <ShopRegistering>가게 정보 수정</ShopRegistering>
          <ShopIntroduceName>가게 이름</ShopIntroduceName>
          <ShopIntroduce
            height="60px"
            type="text"
            value={Name}
            onChange={NameHandler}
            placeholder="     정확한 상호명을 입력해주세요."
          />
          <ShopIntroduceName>가게 소개</ShopIntroduceName>
          <ShopIntroduce
            height="125px"
            type="text"
            value={Readme}
            onChange={ReadmeHandler}
            placeholder="     자신의 가게를 자유롭게 소개해주세요! (최대 300자)"
          />
          <ShopIntroduceName>전화번호</ShopIntroduceName>
          <ShopIntroduce
            height="60px"
            type="text"
            value={PhoneNumber}
            onChange={PhoneNumberHandler}
            placeholder="     ex. 02-0000-0000"
          />
          <ShopIntroduceName>주소</ShopIntroduceName>
          <ShopIntroduce
            height="60px"
            type="text"
            value={Address}
            onChange={AddressHandler}
            placeholder="     ex. 서울특별시 서대문구 대현동 11-11층"
          />
          <ShopIntroduceName>운영 시간</ShopIntroduceName>
          <ShopIntroduce
            height="60px"
            type="text"
            value={OpenTime}
            onChange={OpenTimeHandler}
            placeholder="     ex. 매일 12:00~20:00"
          />
          <ShopIntroduceName>카카오톡 채널</ShopIntroduceName>
          <ShopIntroduce
            height="60px"
            type="text"
            value={KakaoUrl}
            onChange={KakaoUrlHandler}
            placeholder="     운영중인 카카오톡 채널이 있다면 링크를 첨부해주세요."
          />
          <ShopIntroduceName>인스타그램</ShopIntroduceName>
          <ShopIntroduce
            height="60px"
            type="text"
            value={Instagram}
            onChange={InstagramHandler}
            placeholder="     운영중인 인스타그램이 있다면 링크를 첨부해주세요."
          />

          {/* 드래그앤 드롭 파일 컴포넌트 2개 */}
          <ShopImgUpload
            MainFile={MainFile}
            setMainFile={setMainFile}
            MainFileHandler={MainFileHandler}
          />
          <ShopMenuUpload
            MenuFile={MenuFile}
            setMenuFile={setMenuFile}
            MenuFileHandler={MenuFileHandler}
          />

          <BeforeShowBtn onClick={onPreview}>미리보기</BeforeShowBtn>

          <ModifyBtn type="submit">수정하기</ModifyBtn>
        </form>
      </WrapBox>
    );
  } else {
    return (
      <WrapBox>
        <TopBar />
        <form onSubmit={submitHandler}>
          <ShopRegistering>가게 정보 수정</ShopRegistering>
          <WhiteModal>
            <MainImages>
              {MainFile.map((img, idx) => {
                return (
                  <MainImg
                    key={idx}
                    preview={window.URL.createObjectURL(img)}
                  ></MainImg>
                );
              })}
            </MainImages>
            <ShopDetailHeader>
              <ShopName>{Name}</ShopName>
              <IsRegistered>등록가게</IsRegistered>
            </ShopDetailHeader>{" "}
            <SubTitle>소개</SubTitle>
            <ShopDesc>{Readme}</ShopDesc>
            <DetailInfoCard>
              <DetailInfoItem
                category="전화번호"
                content={PhoneNumber}
                fontSize="14px"
              />
              <DetailInfoItem
                category="주소"
                content={Address}
                fontSize="14px"
              />
              <DetailInfoItem
                category="운영시간"
                content={OpenTime}
                fontSize="14px"
              />
              <DetailInfoItem
                category="문의"
                content="카카오톡 | 인스타그램"
                fontSize="14px"
              />
            </DetailInfoCard>
            <SubTitle>대표 케이크</SubTitle>
            <CakeImages>
              {MenuFile.map((img, idx) => {
                return (
                  <CakeProductImage
                    key={idx}
                    preview={window.URL.createObjectURL(img)}
                  ></CakeProductImage>
                );
              })}
            </CakeImages>
            <CloseButton onClick={onPreview}>닫기</CloseButton>
          </WhiteModal>
          <BeforeShowBtn>미리보기</BeforeShowBtn>
          <ModifyBtn type="submit">수정하기</ModifyBtn>
        </form>
      </WrapBox>
    );
  }
};

export default ShopInformationModify;
