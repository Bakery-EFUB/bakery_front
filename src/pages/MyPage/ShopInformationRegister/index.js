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

const token = JSON.parse(localStorage.getItem("token"));

//ui 구현
const ShopInformationRegister = () => {
  const [storeData, setStoreData] = useState(DEFAULT_STORE_DATA);
  const [MainFile, setMainFile] = useState([]);
  const [MenuFile, setMenuFile] = useState([]);

  //api 명세서
  const updateStoreData = partialStoreData =>
    setStoreData(prev => ({ ...prev, ...partialStoreData }));

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
    const formData = new FormData();
    const encoder = new TextEncoder();
    const variables = JSON.stringify({ storedata: storeData });
    const data = new Blob(encoder.encode(variables));

    formData.append("mainImg", MainFile[0], "mainImage.png");
    formData.append("menuImg", MenuFile[0], "menuImage.png");
    formData.append("storedata", data, "variable.data");

    axios
      .post("https://caker.shop/stores/myStore", formData, {
        headers: {
          "X-AUTH-TOKEN": token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log(formData);
        console.log("제출 완료");
      })
      .catch(error => {
        console.log(formData);
        console.log("제출 실패", error);
      });
  };

  return (
    <WrapBox>
      <TopBar />
      <div>
        <ShopRegistering>가게 정보 등록</ShopRegistering>
        {SHOP_DATA.map(data => {
          return (
            <React.Fragment key={data.key}>
              <ShopIntroduceName>{data.key}</ShopIntroduceName>
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

        <RegisterBtn onClick={submitHandler}>등록하기</RegisterBtn>
      </div>
    </WrapBox>
  );
};

export default ShopInformationRegister;
