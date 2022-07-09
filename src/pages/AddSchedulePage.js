import React from "react";
import styled from "styled-components";

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
    </div>
  );
};

export default AddSchedulePage;
