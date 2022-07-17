import React, { useState, useContext, createContext } from "react";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../components/TopBar";

import PickUp from "./Proposal/PickUp";
import City from "./Proposal/City";
import Cake from "./Proposal/Cake";
import Size from "./Proposal/Size";
import Taste from "./Proposal/Taste";
import Price from "./Proposal/Price";
import Design from "./Proposal/Design";
import Done from "./Proposal/Done";

const Proposal = () => {
  const [history, setHistory] = useState(0);
  return (
    <div>
      <TopBar />
      <Routes>
        <Route
          path="/city"
          element={<City history={history} setHistory={setHistory} />}
        />
        <Route
          path="/cake"
          element={<Cake history={history} setHistory={setHistory} />}
        />
        <Route
          path="/size"
          element={<Size history={history} setHistory={setHistory} />}
        />
        <Route
          path="/taste"
          element={<Taste history={history} setHistory={setHistory} />}
        />
        <Route
          path="/price"
          element={<Price history={history} setHistory={setHistory} />}
        />
        <Route
          path="/design"
          element={<Design history={history} setHistory={setHistory} />}
        />
        <Route
          path="/pickup"
          element={<PickUp history={history} setHistory={setHistory} />}
        />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default Proposal;
