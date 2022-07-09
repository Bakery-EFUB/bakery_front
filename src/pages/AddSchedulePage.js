import React from "react";
import styled from "styled-components";
import arrowImg from "../images/DropdownArrow.svg";

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: var(--main-pink);
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: var(--sub-yellow);
`;

// 드롭박스
const CustomSelect = styled.select`
  font-size: 20px;
  border: none;
  appearance: none;
  padding-right: 8px;
  z-index: 3;
`;
const DropdownArrow = styled.span`
  width: 24px;
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
    <div>
      <CustomSelect>
        {items.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </CustomSelect>
      <DropdownArrow>
        <img src={arrowImg} alt="dropdown" />
      </DropdownArrow>
    </div>
  );
};

const AddSchedulePage = () => {
  const month = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const day = [];
  const time = [];
  for (let i = 1; i <= 31; i++) day.push(i + "일");
  for (let i = 13; i <= 20; i++) {
    time.push(i + ":00");
    time.push(i + ":30");
  }

  return (
    <div>
      <TopBar>일정 추가</TopBar>
      <Dropdown items={month} />
    </div>
  );
};

export default AddSchedulePage;
