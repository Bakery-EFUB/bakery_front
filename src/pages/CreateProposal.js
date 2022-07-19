import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";

import TopBar from "../components/TopBar";

import PickUp from "./CreateProposal/PickUp";
import City from "./CreateProposal/City";
import Cake from "./CreateProposal/Cake";
import Size from "./CreateProposal/Size";
import Taste from "./CreateProposal/Taste";
import Price from "./CreateProposal/Price";
import Design from "./CreateProposal/Design";
import Done from "./CreateProposal/Done";

const CreateProposal = () => {
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

export default CreateProposal;
