import React from "react";
import { Link } from "react-router-dom";
import BigCardDisplay from "../Common/BigCardDisplay";

const SearchResult = ({ searchResult }) => {
  return (
    <>
      {searchResult?.map(shop => {
        console.log(shop);
        return (
          <Link to={`/shopdetail/${shop.id}`} key={shop.id}>
            <BigCardDisplay
              MainText={shop.name}
              SubText={shop.certifyFlag}
              image={shop.mainImg}
            ></BigCardDisplay>
          </Link>
        );
      })}
    </>
  );
};

export default SearchResult;
