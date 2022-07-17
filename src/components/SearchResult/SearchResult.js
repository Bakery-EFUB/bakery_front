import React from "react";
import { Link } from "react-router-dom";
import BigCardDisplay from "../BigCardDisplay";

const SearchResult = () => {
  return (
    <>
      <Link to="/shopdetail">
        <BigCardDisplay MainText="달다구리" SubText="미등록"></BigCardDisplay>
      </Link>
    </>
  );
};

export default SearchResult;
