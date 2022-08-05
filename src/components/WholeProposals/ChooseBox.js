import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DropdownArrow1 from "../../images/DropdownArrow1.svg";
import axios from "axios";
const ContentBoxWithMargin = styled.div`
  width: 381px;
  height: 31px;
  margin-top: 50px;
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
const ChooseBox = () => {
  //셀렉트박스에서 누를 때마다 해당 카테고리의 체크리스트들을 배열의 형태로 저장할 state
  const [selectedOrder,setSelectedOrder] = useState([]);

  //필터된 제안서 정보들을 받고 이를 orderlist에 저장해주는 함수
  const [orderList, setOrderList] = useState([]);
  const getOrderListData = useCallback(async () =>{
    const res = await fetch(`https://caker.shop/order/${search}`);
    const data = await res.json();
    setOrderList(data.result);
  }, [select]);
  
  useEffect(() => {
    getOrderListData();
  },[getOrderListData]);  
  //해당 셀렉트박스가 선택되거나 해제되었을 때 해당 정보들을 selectedOrder 저장하는 함수
  const handleSelectList = (e, loc_gu, loc_dong ,caketype) =>{
    e.targeted.checked
    ? setSelectedOrder([
      ...selectedOrder,
      { locgu: loc_gu, locdong: loc_dong, caketype},
    ])
    : setSelectedOrder(
      selectedOrder.filter(list => list.content !== content)
    );
  };

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
