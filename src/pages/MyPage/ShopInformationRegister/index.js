import React, { useEffect, useState } from "react";
import axios from "axios";
import ShopImgUpload from "../../../components/Fileupload/ShopImgUpload";
import ShopMenuUpload from "../../../components/Fileupload/ShopMenuUpload";
import TopBar from "../../../components/Common/Sidebar/TopBar";
import { SHOP_DATA, DEFAULT_STORE_DATA } from "./const";
import {
  WrapBox,
  ShopRegistering,
  ShopIntroduceName,
  ShopIntroduce,
  RegisterBtn,
} from "./styles";
import http from "../../../common/http";

const token = JSON.parse(localStorage.getItem("token"));

//ui 구현
const ShopInformationRegister = () => {
  const formData = new FormData();
  const [storeData, setStoreData] = useState(DEFAULT_STORE_DATA);

  const updateStoreData = partialStoreData => {
    setStoreData(prev => ({ ...prev, ...partialStoreData }));
  };

  const [MainFile, setMainFile] = useState([]);
  const [MenuFile, setMenuFile] = useState([]);

  //...prev가 이전값이고 ...partialStoreData가 현재값임
  const MainFileHandler = e => {
    e.preventDefault();
    setShopFile(e.tartget.value);
  };

  const MenuFileHandler = e => {
    e.preventDefault();
    setMenuFile(e.tartget.value);
  };

  //제출 -> 백엔드로 post
  const submitHandler = e => {
    console.log(storeData);

    http
      .post("/stores/myStore", storeData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(res => postImg(res.data))

      // .then(res => postImg(res.orderId))
      .catch(err => console.log("json 포스트 실패", err));

    const postImg = async id => {
      formData.append("mainImg", MainFile[0].original, "mainImage.png");
      formData.append("menuImg", MenuFile[0].original, "menuImage.png");
      formData.append("storeId", id);
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
    };
  };

  return (
    <WrapBox>
      <TopBar />
      <div>
        <ShopRegistering>가게 정보 등록</ShopRegistering>
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
        {/* <input
          type="file"
          accept="impge/png"
          name="profile_img"
          onChange={onChange}
        ></input>
        <input
          type="file"
          accept="impge/png"
          name="profile_img2"
          onChange={onChange2}
        ></input> */}

        <RegisterBtn onClick={submitHandler}>등록하기</RegisterBtn>
      </div>
    </WrapBox>
  );
};

export default ShopInformationRegister;
