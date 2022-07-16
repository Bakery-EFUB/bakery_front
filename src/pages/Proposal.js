import React, { useState } from "react";
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

const Proposal = () => {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/city" element={<City />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/size" element={<Size />} />
        <Route path="/taste" element={<Taste />} />
        <Route path="/price" element={<Price />} />
        <Route path="/design" element={<Design />} />
        <Route path="/pickup" element={<PickUp />} />
      </Routes>
    </div>
  );
};

export default Proposal;
