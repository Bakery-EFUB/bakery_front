import React, { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import PickUp from "./CreateProposal/PickUp";
import City from "./CreateProposal/City";
import Cake from "./CreateProposal/Cake";
import Size from "./CreateProposal/Size";
import Taste from "./CreateProposal/Taste";
import Price from "./CreateProposal/Price";
import Design from "./CreateProposal/Design";
import Done from "./CreateProposal/Done";

import AIP from "../components/API";

const CreateProposal = () => {
  const [history, setHistory] = useState(0);

  const [original, setOriginal] = useState({
    cityId: [],
    cakeId: null,
    sizeId: null,
    tasteId: null,
    design: [],
    priceId: null,
    pickUp: null,
  });

  const navigate = useNavigate();
  // const postProposal = () => {
  //   const response = await API.post("/orders",{city:city, })
  //   .then( (response) => {
  //      navigate("/create/done")
  //   })
  //   .catch( (error)=> {
  //     console.log(error);
  //   });
  // }

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
            />
          }
        />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default CreateProposal;
