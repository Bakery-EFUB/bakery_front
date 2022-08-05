import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import TopBar from "../../components/Common/Sidebar/TopBar";
import PickUp from "./PickUp";
import Done from "./Done";

import http from "../../common/http";

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

  // 제안서 픽업 날짜 수정 api
  const EditProposal = async => {
    http
      .patch(`/orders/${order_id}`, {
        locationGu: "",
        locationDong: "",
        type: "", //케이크 종류
        flavor: "", //케이크 맛
        size: "", //케이크 크기
        description: "", //케이크 설명
        pickupDate: original.pickUp, //변경된 픽업일자를 넣어주세요!
        priceMin: 0, //minimum 가격
        priceMax: 0, //maximum 가격
      })
      .then(res => console.log("픽업 데이트 수정 성공", res))
      .catch(err => console.log("json 포스트 실패", err));
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
          path="/pickup"
          element={
            <PickUp
              history={history}
              setHistory={setHistory}
              original={original}
              setOriginal={setOriginal}
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
