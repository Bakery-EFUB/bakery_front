import React, { useEffect, useState } from "react";

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

import AIP from "../components/API";

const CreateProposal = () => {
  const [history, setHistory] = useState(0);
  const [oriCity, setOriCity] = useState([3]);
  const [oriCake, setOriCake] = useState(null);

  useEffect(() => {
    console.log("됏다", oriCity);
  }, [oriCity]);

  // const CreateProposal = () => {
  //   const response = await API.post("/orders",{city:city, })
  //   .then( (response) => {
  //     console.log(response);
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
              oriCity={oriCity}
              setOriCity={setOriCity}
            />
          }
        />
        <Route
          path="/cake"
          element={
            <Cake
              history={history}
              setHistory={setHistory}
              oriCake={oriCake}
              setOriCake={setOriCake}
            />
          }
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
