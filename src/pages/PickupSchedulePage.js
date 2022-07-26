import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import PageTitle from "../components/PageTitle";
import CustomCalendar from "../components/Proposal/CustomCalendar";
import { useNavigate } from "react-router-dom";
import API from "../components/API";

const TEMP_DATA_FOR_CALENDAR = [
  {
    content: "테스트 자료",
    pickupDate: "2022-07-01T14:30:00",
    pickupTime: "2022-07-01T14:30:00",
    eventId: 2,
    storeId: 3,
  },
  {
    content: "통신 상태 원활",
    pickupDate: "2022-07-15T16:00:00",
    pickupTime: "2022-07-15T16:00:00",
  },
  {
    content: "근데 이제 값이없는",
    pickupDate: "2022-07-21T13:30:00",
    pickupTime: "2022-07-21T13:30:00",
  },
  {
    content: "그렇습니다",
    pickupDate: "2022-07-30T19:00:00",
    pickupTime: "2022-07-30T19:00:00",
  },
];
const TEMP_STORE_ID = 1;

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
const ScheduleDelete = styled.button`
  font-size: 14px;
  color: var(--sub-darkgray);
  background-color: transparent;
  border: none;
`;

const EmptyDayMsg = styled.div`
  font-size: 14px;
  text-align: center;
  color: var(--sub-darkgray);
`;

const CreateScheduleCard = ({ pickupTime, pickupInfo, eventId, storeId }) => {
  const deleteSchedule = async () => {
    const response = await API({url : `/store/${storeId}/events/${eventId}`, method: "delete"})
      .catch((e)=>console.error(e));
  };
  return (
    <ScheduleCard>
      <div>
        <ScheduleContent>{pickupTime.slice(11, 16)}</ScheduleContent>
        <ScheduleContent>{pickupInfo}</ScheduleContent>
      </div>
      <ScheduleDelete onClick={deleteSchedule}>삭제</ScheduleDelete>
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
  const [pickupOnSelectedDay, setPickupOnSelectedDay] = useState([]);
  const [pickupSchedules, setPickupSchedules] = useState([]);
  const [selectedDay, setSelectedDay] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });
  const onClickDay = date => {
    setSelectedDay(date);
    setPickupOnSelectedDay(
      pickupSchedules.filter(
        schedule =>
          schedule.pickupDate.slice(0, 10) ===
          new Date(date.year, date.month - 1, date.date + 1)
            .toISOString()
            .slice(0, 10),
      ),
    );
  };
  // API 통신
  // const loadPickupScheduleData = async () => {
  //   const response = await API({ url: `/store/${TEMP_STORE_ID}/events` })
  //     .then(res => {
  //       // console.log(res);
  //       setPickupSchedules(
  //         res.data.map(pickup => {
  //           return {
  //             storeId: pickup.store.id,
  //             content: pickup.content,
  //             pickupDate: pickup.pickupDate,
  //             pickupTime: pickup.pickupTime,
  //             eventId: pickup.eventId,
  //             // 이후 이벤트 아이디도 추가해야함
  //           };
  //         }),
  //       );
  //     })
  //     .catch(e => console.error(e));
  // };
  useEffect(() => {
    // loadPickupScheduleData();
    // console.log(pickupSchedules);
    setPickupSchedules(TEMP_DATA_FOR_CALENDAR); //test
  }, []);
  const navigator = useNavigate();
  const allDaysHavingSchedule = pickupSchedules.map(schedule => {
    const [pickupYear, pickupMonth, pickupDate] = schedule.pickupDate
      .split("T")[0]
      .split("-")
      .map(Number);
    return {
      year: pickupYear,
      month: pickupMonth,
      date: pickupDate,
    };
  });
  return (
    <div>
      <TopBar />
      <PageTitle title="픽업 일정" margin="60px 0 63px 0" />
      <CalendarContainer>
        <CustomCalendar
          setClickedDay={onClickDay}
          allDaysHavingSchedule={allDaysHavingSchedule}
        />
      </CalendarContainer>
      <SelectedDay>{`${selectedDay.year}.${selectedDay.month}.${selectedDay.date}`}</SelectedDay>
      <ScheduleCardList>
        {pickupOnSelectedDay.length === 0 ? (
          <EmptyDayMsg> 일정이 없습니다. </EmptyDayMsg>
        ) : (
          pickupOnSelectedDay.map((schedule, idx) => (
            <CreateScheduleCard
              key={idx}
              pickupTime={schedule.pickupTime}
              pickupInfo={schedule.content}
              eventId={schedule.eventId}
              storeId={schedule.storeId}
            />
          ))
        )}
      </ScheduleCardList>
      <BigPinkButtonBottom onClick={() => navigator("/addschedule")}>
        일정 추가
      </BigPinkButtonBottom>
    </div>
  );
};

export default PickupSchedulePage;
