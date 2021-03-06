import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { GetOrder } from "../../api/home";
//axios 적용 전 임시
import orderList from "../../_mock/orderList";
import {
  CardDisplayContainer,
  Header,
  Menu,
  Body,
  MoreInfoIcon,
  SeeAll,
} from "./style";

const OrderDisplay = ({ title }) => {
  const [allOrderInfo, setAllOrderInfo] = useState([]);

  useEffect(() => {
    //setAllOrderInfo(orderList["sheetResponseDTOs"]);

    GetOrder()
      .then(data => {
        console.log(data);
        setAllOrderInfo(data["sheetResponseDTOs"]);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <CardDisplayContainer>
      <Header>
        <Menu>{title}</Menu>
        <Link to="/allproposal">
          <SeeAll>
            전체보기<MoreInfoIcon></MoreInfoIcon>
          </SeeAll>
        </Link>
      </Header>
      <Body>
        {allOrderInfo?.map(order => {
          return (
            <Card
              key={order.sheetId}
              title={order.locationDong}
              image={order.imageUrl}
              subtitle={order.hashtag}
            ></Card>
          );
        })}
      </Body>
    </CardDisplayContainer>
  );
};

export default OrderDisplay;
