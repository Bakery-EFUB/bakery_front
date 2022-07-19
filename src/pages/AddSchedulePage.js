import React, { useState } from "react";
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

const ContentBoxWithMargin = styled.div`
  padding: 0 23.5px;
  margin-top: 70px;
`;

const SubTitle = styled.div`
  margin-top: 70px;
  color: var(--black);
  font-size: 22px;
  font-weight: bold;
`;

const DropdownGroup = styled.div`
  margin-top: 23px;
  display: flex;
  gap: 10px 35px;
  flex-wrap: wrap;
`;

// 드롭박스
const CustomSelect = styled.select`
  position: relative;
  font-size: 20px;
  border: none;
  appearance: none;
  padding-right: 8px;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  color: var(--black);
  text-decoration: none;
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
const Dropdown = ({ value, category, items, forChange }) => {
  const handleOnChange = value => {
    forChange.setScheduleInfo({
      ...forChange.scheduleInfo,
      [category]: items.indexOf(value),
    });
  };
  return (
    <div>
      <CustomSelect value={value} onChange={() => handleOnChange(this)}>
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

const WhiteInputBox = styled.input`
  width: 100%;
  border: solid var(--black);
  border-width: 0 0 1px;
  border-radius: 0;
  padding: 10px 0;
  font-size: 20px;
  outline: 0;
`;

const BigPinkButtonBottom = styled.button`
  margin: 220px 0 40px;
  position: relative;
  left: 23.5px;
  right: 23.5px;
  width: calc(100% - 47px);
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  color: var(--sub-yellow);
  background-color: var(--main-pink);
  border: none;
  border-radius: 6px;
`;

const AddSchedulePage = () => {
  const [scheduleInfo, setScheduleInfo] = useState(() => {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hour: new Date().getHours(),
      desc: "",
    };
  });
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
      <ContentBoxWithMargin>
        <SubTitle>날짜 선택</SubTitle>
        <DropdownGroup>
          <Dropdown
            value={scheduleInfo.year + "년"}
            category="year"
            items={["2022년", "2023년"]}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
          <Dropdown
            value={scheduleInfo.month + "월"}
            category="month"
            items={month}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
          <Dropdown
            value={scheduleInfo.day + "일"}
            category="day"
            items={day}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
        </DropdownGroup>
      </ContentBoxWithMargin>
      <ContentBoxWithMargin>
        <SubTitle>시간 선택</SubTitle>
        <DropdownGroup>
          <Dropdown items={["AM", "PM"]} />
          <Dropdown
            category="time"
            items={time}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
        </DropdownGroup>
      </ContentBoxWithMargin>
      <ContentBoxWithMargin>
        <SubTitle>내용</SubTitle>
        <WhiteInputBox type="text" placeholder="ex. 성함 / 케이크 종류" />
      </ContentBoxWithMargin>
      <BigPinkButtonBottom>추가하기</BigPinkButtonBottom>
    </div>
  );
};

export default AddSchedulePage;
