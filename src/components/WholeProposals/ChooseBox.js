import React, { useEffect, useState,useCallback } from "react";
import styled from "styled-components";
import DropdownArrow1 from "../../images/DropdownArrow1.svg";
import axios from "axios";
const ContentBoxWithMargin = styled.div`
  width: 100%;
  height: 31px;
  margin-top: 50px;
  margin-bottom: 20px;
`;
const DropdownGroup = styled.div`
  justify-content: center;
  margin-top: 23px;
  display: flex;
`;
const CustomSelect = styled.select`
  font-family: "Apple SD Gothic Neo";
  margin: 5px;
  font-size: 15px;
  appearance: none;
  padding-right: 2px;
  border: none;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  color: #949494;
  text-decoration: none;

  option {
    color: #949494;
    border-radius: 10%;
    border: none;
    list-style: none;
  }
`;
const ChoooseDisplay = styled.div`
  border-radius: 25px;
  border: 2px solid var(--sub-darkgray);
  margin-left:30px;
  display: flex;
  flex-direction: row;
`;
const DropdownArrow = styled.span`
  margin-right: 3px;
  margin-top: 8px;
  & > img {
    width: 12px;
    margin-bottom: 4px;
    transition: transform 0.3s;
  }
  select:focus + & > img {
    transform: rotate(180deg);
  }
`;

const Dropdown = ({ items }) => {
  return (
    <ChoooseDisplay>
      <CustomSelect autoFocus>
        {items.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </CustomSelect>
      <DropdownArrow>
        <img src={DropdownArrow1} alt="dropdown" />
      </DropdownArrow>
    </ChoooseDisplay>
  );
};
const Gu = ['서대문구']
const Seodaemun = ['동 전체','북아현동','신촌동','연희동','홍제1동','홍제2동','홍제3동','홍은1동', '홍은2동','남가좌1동','남가좌2동','북가좌1동','북가좌2동'];
const CakeType = ['레터링 케이크','미니(도시락) 케이크','생화 케이크','플라워앙금 케이크','컵 케이크','기타 케이크'];
const ChooseBox = () => {


  return (
    <div>
      <ContentBoxWithMargin>
        <DropdownGroup>
          <Dropdown items={Gu}></Dropdown>
          <Dropdown items={Seodaemun}></Dropdown>
          <Dropdown items={CakeType}></Dropdown>
        </DropdownGroup>
      </ContentBoxWithMargin>
    </div>
  );
};
export default ChooseBox;
