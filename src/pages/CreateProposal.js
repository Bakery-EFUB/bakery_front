import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import TopBar from "../components/Common/Sidebar/TopBar";
import PickUp from "./CreateProposal/PickUp";
import City from "./CreateProposal/City";
import Cake from "./CreateProposal/Cake";
import Size from "./CreateProposal/Size";
import Taste from "./CreateProposal/Taste";
import Price from "./CreateProposal/Price";
import Design from "./CreateProposal/Design";
import Done from "./CreateProposal/Done";

import http from "../common/http";
const CreateProposal = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);

  const [history, setHistory] = useState(0);

  const [original, setOriginal] = useState({
    cityId: null,
    city: null,
    cakeId: null,
    cake: null,
    sizeId: null,
    size: null,
    tasteId: null,
    taste: null,
    design: null,
    priceId: null,
    min: null,
    max: null,
    pickUp: null,
    file: null,
  });

  const navigate = useNavigate();

  const postProposal = async => {
    // const dataSet = {
    //   locationGu: [original.city[0]], //구
    //   type: original.cake, //케이크 종류
    //   flavor: original.taste, //케이크 맛
    //   size: original.size, //케이크 크기
    //   description: original.design, //케이크 설명
    //   pickupDate: original.pickUp, //픽업일자/시간
    //   priceMin: original.min, //minimum 가격
    //   priceMax: original.max, //maximum 가격
    // };

    const sheetDTO = {
      locationGu: "gu1",
      locationDong: "dong",
      type: "str", //케이크 종류
      flavor: "str", //케이크 맛
      size: "str", //케이크 크기
      description: "str", //케이크 설명
      pickupDate: "2022-07-22T09:00:00.00", //픽업일자/시간
      priceMin: 1, //minimum 가격
      priceMax: 10, //maximum 가격
    };

    http
      .post("/orders", {
        locationGu: "gu1",
        locationDong: "dong",
        type: "str",
        flavor: "str",
        size: "str",
        description: "str",
        pickupDate: "2022-07-22T09:00:00.00",
        priceMin: 1,
        priceMax: 10,
      })
      .then(res => postImg2(res.data))
      .catch(err => console.log("json 포스트 실패", err));
  };

  // const postImg2 = async id => {
  //   console.log("아이디", id);

  //   let formData = new FormData();
  //   formData.append("file", original.file);
  //   formData.append("orderId", id);

  //   // console.log("폼데이터", formData); // FormData {}
  //   for (const keyValue of formData) console.log(keyValue);

  //   await axios({
  //     method: "patch",
  //     url: "https://caker.shop/orders",
  //     data: formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       "X-AUTH-TOKEN": token,
  //     },
  //   })
  //     .then(res => console.log("파일 포스트 성공", res))
  //     .catch(err => console.log("파일 포스트 실패", err));

  //   // axios
  //   //   .patch("https://caker.shop/orders", formData, {
  //   //     headers: {
  //   //       "Content-Type": "multipart/form-data",
  //   //       Accept: "multipart/form-data",
  //   //       "X-AUTH-TOKEN": token,
  //   //     },
  //   //   })
  //   //   .then(res => console.log("파일 포스트 성공", res))
  //   //   .catch(err => console.log("파일 포스트 실패", err));
  // };

  const onChange = e => {
    const img = e.target.files[0];
    console.log(img);
    const formData = new FormData();
    formData.append("file", img);
    formData.append("orderId", 5);
    // console.log("폼데이터", formData); // FormData {}
    // for (const keyValue of formData) console.log(keyValue);

    axios
      .patch("https://caker.shop/orders", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "multipart/form-data",
          "X-AUTH-TOKEN": token,
        },
      })
      .then(res => console.log("파일 포스트 성공", res))
      .catch(err => console.log("파일 포스트 실패", err));
  };

  return (
    <div>
      <TopBar />

      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        name="profile_img"
        onChange={onChange}
      ></input>

      <Routes>
        <Route
          path="/city"
          element={
            <City
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/cake"
          element={
            <Cake
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/size"
          element={
            <Size
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/taste"
          element={
            <Taste
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/price"
          element={
            <Price
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/design"
          element={
            <Design
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
            />
          }
        />
        <Route
          path="/pickup"
          element={
            <PickUp
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
              postProposal={postProposal}
            />
          }
        />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default CreateProposal;
