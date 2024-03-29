import React from "react";
import { Link } from "react-router-dom";
import { GetRecommendShop } from "../../api/home";
import { useEffect, useState } from "react";
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
    GetRecommendShop()
      .then(data => {
        setAllShopInfo(data);
      })
      .catch(e => {
        console.log(e);
      });
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
        {allShopInfo ? (
          allShopInfo.map(shop => {
            return (
              <Link
                to={`/shopdetail/${shop.id}`}
                key={shop.id}
                style={{ marginRight: "3%" }}
              >
                <Card title={shop.name} image={shop.mainImg}></Card>
              </Link>
            );
          })
        ) : (
          <Card subtitle={"등록된 가게가 없습니다"}></Card>
        )}
      </Body>
    </CardDisplayContainer>
  );
};

export default ShopDisplay;
