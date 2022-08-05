import React, { useEffect, useState,useCallback } from "react";
import styled from "styled-components";
import DropdownArrow1 from "../../images/DropdownArrow1.svg";
import axios from "axios";
const ContentBoxWithMargin = styled.div`
  width: 381px;
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
  margin-left:40px;
`;
const DropdownArrow = styled.span`
  margin-right: 3px;
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
const Seodaemun =['홍은동'];
const CakeType = ['레터링케이크'];
const ChooseBox = () => {


  return (
    <div>
      <ContentBoxWithMargin>
        <DropdownGroup>
          <Dropdown items={Seodaemun}></Dropdown>
          <Dropdown items={CakeType}></Dropdown>
        </DropdownGroup>
      </ContentBoxWithMargin>
    </div>
  );
};
export default ChooseBox;
