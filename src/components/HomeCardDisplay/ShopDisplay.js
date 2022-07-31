import React from "react";
import { Link } from "react-router-dom";
import { GetRecommend } from "../../api/home";
import { useEffect, useState } from "react";
//axios 적용 전 임시
import recommend from "../../_mock/recommendShopList";
import Card from "./Card";
import {
  CardDisplayContainer,
  Header,
  Menu,
  Body,
  MoreInfoIcon,
  SeeAll,
} from "./style";

const ShopDisplay = ({ title }) => {
  const [allShopInfo, setAllShopInfo] = useState([]);

  useEffect(() => {
    setAllShopInfo(recommend);

    /* GetRecommend()
      .then(data => {
        console.log(data);
        console.log(recommend);
        setAllShopInfo();
      })
      .catch(e => {
        console.log(e);
      });*/
  }, []);

  return (
    <CardDisplayContainer>
      <Header>
        <Menu>{title}</Menu>
        <Link to="/recommend">
          <SeeAll>
            전체보기<MoreInfoIcon></MoreInfoIcon>
          </SeeAll>
        </Link>
      </Header>
      <Body>
        {allShopInfo.map(shop => {
          return (
            <Card key={shop.id} title={shop.name} image={shop.mainImg}></Card>
          );
        })}
      </Body>
    </CardDisplayContainer>
  );
};

export default ShopDisplay;
