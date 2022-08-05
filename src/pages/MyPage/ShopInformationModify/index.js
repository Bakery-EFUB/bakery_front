import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopImgUpload from "../../../components/Fileupload/ShopImgUpload";
import ShopMenuUpload from "../../../components/Fileupload/ShopMenuUpload";
import TopBar from "../../../components/Common/Sidebar/TopBar";
import { DetailInfoCard } from "../../../components/DetailInfoCard";
import DetailInfoItem from "../../../components/DetailInfoItem";
import { SHOP_DATA, DEFAULT_STORE_DATA } from "./const";
import http from "../../../common/http";
import { useNavigate } from "react-router-dom";

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
  width: 100%;
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
  width: 90%;
  height: ${props => props.height};
  margin: 10px 0px 0px 4.5%;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: justify;
`;

//미리보기 버튼
const BeforeShowBtn = styled.button`
  margin: 70px 0px 0px 5%;
  background: var(--white);
  width: 43%;
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
  margin: 70px 0px 0px 4%;
  background: var(--main-pink);
  width: 43%;
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

const token = JSON.parse(localStorage.getItem("token"));

//ui 구현
const ShopInformationModify = () => {
  const nav = useNavigate();
  const formData = new FormData();
  const [storeData, setStoreData] = useState(DEFAULT_STORE_DATA);
  const [MainFile, setMainFile] = useState([]);
  const [MenuFile, setMenuFile] = useState([]);
  const [flip, setFlip] = useState(true);

  const updateStoreData = partialStoreData => {
    setStoreData(prev => ({ ...prev, ...partialStoreData }));
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
    console.log(storeData);
    const Id = localStorage.getItem("storeId");

    formData.append("mainImg", MainFile[0].original, "mainImage.png");
    formData.append("menuImg", MenuFile[0].original, "menuImage.png");
    formData.append("storeId", Id);
    for (const keyValue of formData) console.log(keyValue);
    axios
      .patch("https://caker.shop/stores/myStore/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-AUTH-TOKEN": token,
        },
      })
      .then(res => console.log("파일 포스트 성공", res))
      .catch(err => console.log("파일 포스트 실패", err));

    nav("/caker/mypage");
  };

  if (flip == true) {
    return (
      <WrapBox>
        <TopBar />
        <div>
          <ShopRegistering>가게 정보 수정</ShopRegistering>
          {SHOP_DATA.map(data => {
            return (
              <React.Fragment key={data.key}>
                <ShopIntroduceName>{data.keyword}</ShopIntroduceName>
                <ShopIntroduce
                  type="text"
                  height={data.height}
                  value={storeData[data.key]}
                  onChange={e => {
                    e.preventDefault();
                    updateStoreData({ [data.key]: e.target.value });
                  }}
                  placeholder={data.placeholder}
                />
              </React.Fragment>
            );
          })}

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

          <ModifyBtn onClick={submitHandler}>수정하기</ModifyBtn>
        </div>
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
              <ShopName>{storeData.name}</ShopName>
              <IsRegistered>등록가게</IsRegistered>
            </ShopDetailHeader>{" "}
            <SubTitle>소개</SubTitle>
            <ShopDesc>{storeData.readme}</ShopDesc>
            <DetailInfoCard>
              <DetailInfoItem
                category="전화번호"
                content={storeData.phoneNumber}
                fontSize="14px"
              />
              <DetailInfoItem
                category="주소"
                content={storeData.address}
                fontSize="14px"
              />
              <DetailInfoItem
                category="운영시간"
                content={storeData.openTime}
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
