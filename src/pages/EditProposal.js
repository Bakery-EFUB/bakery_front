import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import TopBar from "../components/TopBar";
import PickUp from "./EditProposal/PickUp";
import City from "./EditProposal/City";
import Cake from "./EditProposal/Cake";
import Size from "./EditProposal/Size";
import Taste from "./EditProposal/Taste";
import Price from "./EditProposal/Price";
import Design from "./EditProposal/Design";
import Done from "./EditProposal/Done";

import API from "../components/API";

const EditProposal = () => {
  const [data, setData] = useState(null);

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

  // order id 뽑기
  const order_id = window.localStorage.getItem("order_id");

  const getOrder = async () => {
    const response = await axios
      .get(`https://caker.shop/orders/${order_id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("제안서 불러오기 실패", error);
      });
  };

  // 제안서 수정
  const EditProposal = async () => {
    const response = await API.patch(`/orders/${order_id}`, {
      locationGu: "서대문구", //구
      locationDong: original.city[0], //동
      type: original.cake, //케이크 종류
      flavor: original.taste, //케이크 맛
      size: original.size, //케이크 크기
      description: original.design, //케이크 설명
      pickupDate: original.pickUp, //픽업일자/시간
      priceMin: original.min, //minimum 가격
      priceMax: original.max, //maximum 가격
      hashtag: original.city[0], //해시태그
    })
      .then(response => {
        navigate("/edit/done");
      })
      .catch(error => {
        console.log("제안서 수정 실패", error);
      });
  };

  // 파일 전송 api
  const dropHandler = file => {
    //file을 백엔드에 전해줌(1)

    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file);

    // test코드
    for (let key of formData.keys()) {
      console.log("키임", key);
    }
    for (let value of formData.values()) {
      console.log("확인", value);
    }

    API.post("/orders", formData, config)
      // 백엔드가 file저장하고 그 결과가 reponse에 담김
      // 백엔드는 그 결과를 프론트로 보내줌(3)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // test 코드
  useEffect(() => {
    console.log("변화", original);
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
              EditProposal={EditProposal}
            />
          }
        />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default EditProposal;
