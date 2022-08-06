import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BigCardDisplay from "../../components/Common/BigCardDisplay";
import PageTitle from "../../components/Common/PageTitle";
import TopBar from "../../components/Common/Sidebar/TopBar";
import { GetRecommendShop } from "../../api/home";
import { Link } from "react-router-dom";

const RecommendContainer = styled.div`
  margin: 0 5%;
`;

const Recommend = () => {
  const [allShop, setAllShop] = useState();

  useEffect(() => {
    GetRecommendShop()
      .then(data => {
        setAllShop(data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <TopBar></TopBar>
      <RecommendContainer>
        <PageTitle title="가게 추천" margin="60px 0 63px 0" />
        {allShop?.map(shop => {
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
      </RecommendContainer>
    </>
  );
};

export default Recommend;
