import React from "react";
import SearchBar from "../components/SearchBar";
import TopBar from "../components/TopBar";

const MainHome = () => {
  return (
    <div>
      <TopBar></TopBar>
      <SearchBar text={"케이크, 가게 검색"} />
    </div>
  );
};

export default MainHome;
