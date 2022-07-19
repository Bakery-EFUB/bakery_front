import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import PageTitle from "../components/PageTitle";
import CustomCalendar from "../components/CustomCalendar";
import { useNavigate } from "react-router-dom";

const SelectedDay = styled.div`
  margin: 40px 0 0;
  padding: 0 24px;
  font-size: 22px;
  font-weight: bold;
  color: var(--black);
`;
const ScheduleCardList = styled.div`
  padding: 15px 24px 40px;
`;

const CalendarContainer = styled.div`
  padding: 0 24px;
`;

const ScheduleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 20px;
  border-radius: 6px;
  background-color: var(--sub-lightpink);
  & + & {
    margin: 10px 0 0;
  }
`;
const ScheduleContent = styled.div`
  font-size: 18px;
  font-weight: 500; // semi bold
  color: var(--black);
  & + & {
    margin: 6px 0 0;
  }
`;
const ScheduleDelete = styled.div`
  font-size: 14px;
  color: var(--sub-darkgray);
`;

const CreateScheduleCard = ({ pickupTime, pickupInfo }) => {
  return (
    <ScheduleCard>
      <div>
        <ScheduleContent>{pickupTime}</ScheduleContent>
        <ScheduleContent>{pickupInfo}</ScheduleContent>
      </div>
      <ScheduleDelete>삭제</ScheduleDelete>
    </ScheduleCard>
  );
};

const BigPinkButtonBottom = styled.button`
  margin: 40px 0 40px;
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

const PickupSchedulePage = () => {
  const navigator = useNavigate();
  return (
    <div>
      <TopBar />
      <PageTitle title="픽업 일정" margin="60px 0 63px 0" />
      <CalendarContainer>
        <CustomCalendar />
      </CalendarContainer>
      <SelectedDay>2022.06.05</SelectedDay>
      <ScheduleCardList>
        <CreateScheduleCard pickupTime="13:00" pickupInfo="000님/ 도시락 케이크" />
        <CreateScheduleCard pickupTime="15:00" pickupInfo="000님/ 레터링 케이크" />
        <CreateScheduleCard pickupTime="16:30" pickupInfo="000님/ 꽃다발 케이크" />
      </ScheduleCardList>
      <BigPinkButtonBottom onClick={() => navigator("/addschedule")}>
        일정 추가
      </BigPinkButtonBottom>
    </div>
  );
};

export default PickupSchedulePage;
