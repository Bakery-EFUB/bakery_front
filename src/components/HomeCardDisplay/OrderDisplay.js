import React from "react";
import styled from "styled-components";
//임시
import MoreIcon from "../../images/MoreInfo.svg";
import Card from "./Card";

import { GetRecommend } from "../../api/home";
import { useEffect, useState } from "react";
//axios 적용 전 임시
import orderList from "../../_mock/orderList";
import { Link } from "react-router-dom";

const CardDisplayContainer = styled.div`
  margin-left: 5%;
`;

const Header = styled.div`
  display: flex;
  margin: 13% 5% 3% 0;
  align-items: center;
  justify-content: space-between;
  color: var(--main-pink);
  writing-mode: horizontal-tb;
`;

const Menu = styled.div`
  font-size: 23px;
  font-weight: 800;
`;

const Body = styled.div`
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MoreInfoIcon = styled.div`
  background: url(${MoreIcon});
  width: 9px;
  height: 13px;
  margin-left: 5px;
`;
const SeeAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderDisplay = ({ title }) => {
  const [allOrderInfo, setAllOrderInfo] = useState([]);

  useEffect(() => {
    console.log(orderList);
    setAllOrderInfo(orderList["sheetResponseDTOs"]);

    /* GetRecommend()
      .then(data => {
        console.log(data);
        console.log(recommend);
        setAllorderInfo();
      })
      .catch(e => {
        console.log(e);
      });*/
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
        {allOrderInfo.map(order => {
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
