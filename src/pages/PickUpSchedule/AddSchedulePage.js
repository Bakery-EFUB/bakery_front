import React, { useState } from "react";
import styled from "styled-components";
import arrowImg from "../../images/DropdownArrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import { AddSchedule } from "../../api/eventschedule";

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
  const handleOnChange = e => {
    forChange.setScheduleInfo({
      ...forChange.scheduleInfo,
      [category]: e.target.value,
    });
  };
  return (
    <div>
      <CustomSelect value={value} onChange={handleOnChange}>
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
  const { storeId } = useParams();
  const navigator = useNavigate();
  const [scheduleInfo, setScheduleInfo] = useState(() => {
    const today = new Date();
    return {
      year: today.getFullYear() + "년",
      month: today.getMonth() + 1 + "월",
      day: today.getDate() + "일",
      time: "13:00",
      desc: "",
    };
  });
  const month = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const day = [];
  const time = [];
  for (let i = 1; i <= 31; i++) day.push(i + "일");
  for (let i = 13; i <= 20; i++) {
    time.push(i + ":00");
    time.push(i + ":30");
  }
  const onChangeDesc = e => {
    setScheduleInfo({
      ...scheduleInfo,
      desc: e.target.value,
    });
  };
  const getDayArrayDependOnMonth = month => {
    switch (month) {
      case "2월":
        return day.slice(0, 28);
      case "1월":
      case "3월":
      case "5월":
      case "7월":
      case "8월":
      case "10월":
      case "12월":
        return day.slice();
      case "4월":
      case "6월":
      case "9월":
      case "11월":
        return day.slice(0, 30);
    }
  };
  const sendPickupSchedule = () => {
    if (scheduleInfo.desc.trim() === "") {
      console.log("내용이 비어있습니다.");
      return;
    }
    const [hour, minute] = scheduleInfo.time.split(":").map(Number);
    const pickupDate = new Date(
      Number(scheduleInfo.year.slice(0, -1)),
      Number(scheduleInfo.month.slice(0, -1)) - 1,
      Number(scheduleInfo.day.slice(0, -1)),
      hour + 9, // time zone
      minute,
    );
    AddSchedule({
      content: scheduleInfo.desc,
      pickupDate: pickupDate.toISOString().slice(0, -5),
      pickupTime: pickupDate.toISOString().slice(0, -5),
    })
      .then(() => navigator(`/shop/pickupschedule/${storeId}`))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <TopBar>일정 추가</TopBar>
      <ContentBoxWithMargin>
        <SubTitle>날짜 선택</SubTitle>
        <DropdownGroup>
          <Dropdown
            value={scheduleInfo.year}
            category="year"
            items={["2022년", "2023년"]}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
          <Dropdown
            value={scheduleInfo.month}
            category="month"
            items={month}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
          <Dropdown
            value={scheduleInfo.day}
            category="day"
            items={getDayArrayDependOnMonth(scheduleInfo.month)}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
        </DropdownGroup>
      </ContentBoxWithMargin>
      <ContentBoxWithMargin>
        <SubTitle>시간 선택</SubTitle>
        <DropdownGroup>
          <Dropdown
            value={scheduleInfo.time}
            category="time"
            items={time}
            forChange={{ scheduleInfo, setScheduleInfo }}
          />
        </DropdownGroup>
      </ContentBoxWithMargin>
      <ContentBoxWithMargin>
        <SubTitle>내용</SubTitle>
        <WhiteInputBox
          type="text"
          placeholder="ex. 성함 / 케이크 종류"
          value={scheduleInfo.desc}
          onChange={onChangeDesc}
        />
      </ContentBoxWithMargin>
      <BigPinkButtonBottom onClick={sendPickupSchedule}>
        추가하기
      </BigPinkButtonBottom>
    </div>
  );
};

export default AddSchedulePage;
