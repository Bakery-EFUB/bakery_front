import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../components/TopBar";

import SmallWhiteButton from "../components/SmallWhiteButton";
import SmallGrayButton from "../components/SmallGrayButton";
import SmallPinkButton from "../components/SmallPinkButton";

import PageTitle from "../components/PageTitle";

import PickUp from "./Proposal/PickUp";

const Proposal = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/pickup" element={<PickUp />} />
      </Routes>
    </div>
  );
};

export default Proposal;
