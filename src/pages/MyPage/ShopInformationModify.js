import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopImgUpload from "../../components/Fileupload/ShopImgUpload";
import ShopMenuUpload from "../../components/Fileupload/ShopMenuUpload";
import TopBar from "../../components/Common/Sidebar/TopBar";
import PreviewModal from "../PreviewModal";

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
          {/* <PreviewModal body={body} onClick={onClick}></PreviewModal> */}
          <BeforeShowBtn onClick={onPreview}>미리보기2</BeforeShowBtn>

          <ModifyBtn type="submit">수정하기2</ModifyBtn>
        </form>
      </WrapBox>
    );
  }
};

export default ShopInformationModify;
