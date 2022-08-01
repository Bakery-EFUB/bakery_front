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

  const dropHandler = async => {
    const dataSet = {
      locationGu: "서대문구", //구
      locationDong: original.city[0], //동
      type: original.cake, //케이크 종류
      flavor: original.taste, //케이크 맛
      size: original.size, //케이크 크기
      description: original.design, //케이크 설명
      pickupDate: original.pickUp, //픽업일자/시간
      priceMin: original.min, //minimum 가격
      priceMax: original.max, //maximum 가격
      // hashtag: original.city[0], //해시태그
    };

    let formData = new FormData();

    formData.append(
      "sheetDTO",
      new Blob([JSON.stringify(dataSet)], {
        type: "application/json",
      }),
    );

    formData.append("file", original.file);

    console.dir(formData, "테스트");

    const config = {
      headers: { "X-AUTH-TOKEN": token },
    };

    // let headers = new Headers({});
    // headers = { "X-AUTH-TOKEN": token };

    // axios({
    //   method: "POST",
    //   url: "https://caker.shop/orders",
    //   mode: "cors",
    //   headers: headers,
    //   dataSet,
    // })
    //   .then(res => console.log("포스트 성공", res))
    //   .catch(err => console.log("포스트 실패", err));

    axios
      .post("https://caker.shop/orders", formData, config)
      .then(res => console.log("결과", res))
      .catch(err => console.log("포스트실패", err));

    // http
    //   .post("/orders", formData, config)
    //   // 백엔드가 file저장하고 그 결과가 reponse에 담김
    //   // 백엔드는 그 결과를 프론트로 보내줌(3)
    //   .then(response => {
    //     console.log("제안서 올리기 성공", response);
    //   })
    //   .catch(error => {
    //     console.log("제안서 올리기 실패", error);
    //   });
  };

  // test 코드
  useEffect(() => {
    console.log("변화", original.file);
  }, [original]);

  return (
    <div>
      <TopBar />
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
              dropHandler={dropHandler}
              // postProposal={postProposal}
            />
          }
        />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default CreateProposal;
