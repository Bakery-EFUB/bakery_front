import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "../styles/calendar.css";
import LeftVector from "../images/LeftVector.svg";
import RightVector from "../images/RightVector.svg";

import styled from "styled-components";

const cx = classNames.bind(style);

const Left = styled.img`
  width: 15px;
  height: 15px;
`;

const Right = styled.img`
  width: 15px;
  height: 15px;

  margin-left: 20px;
  margin-right: 13px;
`;

const CustomCalendar = () => {
  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };
  const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜

  const prevMonth = useCallback(() => {
    //이전 달 보기 보튼
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]);

  const nextMonth = useCallback(() => {
    //다음 달 보기 버튼
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  const monthControl = useCallback(() => {
    return <p>{selectedMonth}</p>;
  }, [selectedMonth]);

  const yearControl = useCallback(() => {
    return <p>{selectedYear}</p>;
  }, [selectedYear]);

  const returnWeek = useCallback(() => {
    //요일 반환 함수
    let weekArr = [];
    week.forEach(v => {
      weekArr.push(
        <div
          key={v}
          className={cx(
            { weekday: true },
            { sunday: v === "일" },
            { saturday: v === "토" }
          )}
        >
          {v}
        </div>
      );
    });
    return weekArr;
  }, []);

  const [selected, setSelected] = useState(1); // 선택된 날짜

  const [existArr, setExistArr] = useState([
    { id: 0, exist: false, reservation: "예약 정보" },
    { id: 1, exist: false, reservation: "예약 정보" },
    { id: 2, exist: false, reservation: "예약 정보" },
    { id: 3, exist: false, reservation: "예약 정보" },
    { id: 4, exist: false, reservation: "예약 정보" },
    { id: 5, exist: false, reservation: "예약 정보" },
    { id: 6, exist: false, reservation: "예약 정보" },
    { id: 7, exist: true, reservation: "예약 정보" },
    { id: 8, exist: false, reservation: "예약 정보" },
    { id: 9, exist: false, reservation: "예약 정보" },
    { id: 10, exist: false, reservation: "예약 정보" },
    { id: 11, exist: false, reservation: "예약 정보" },
    { id: 12, exist: false, reservation: "예약 정보" },
    { id: 13, exist: false, reservation: "예약 정보" },
    { id: 14, exist: false, reservation: "예약 정보" },
    { id: 15, exist: false, reservation: "예약 정보" },
    { id: 16, exist: false, reservation: "예약 정보" },
    { id: 17, exist: false, reservation: "예약 정보" },
    { id: 18, exist: false, reservation: "예약 정보" },
    { id: 19, exist: false, reservation: "예약 정보" },
    { id: 20, exist: false, reservation: "예약 정보" },
    { id: 21, exist: false, reservation: "예약 정보" },
    { id: 22, exist: false, reservation: "예약 정보" },
    { id: 23, exist: false, reservation: "예약 정보" },
    { id: 24, exist: false, reservation: "예약 정보" },
    { id: 25, exist: false, reservation: "예약 정보" },
    { id: 26, exist: false, reservation: "예약 정보" },
    { id: 27, exist: false, reservation: "예약 정보" },
    { id: 28, exist: false, reservation: "예약 정보" },
    { id: 29, exist: false, reservation: "예약 정보" },
    { id: 30, exist: false, reservation: "예약 정보" },
    { id: 31, exist: false, reservation: "예약 정보" },
  ]);

  const returnDay = () => {
    //선택된 달의 날짜들 반환 함수
    let dayArr = [];

    for (const nowDay of week) {
      // 몇 요일부터 시작하는가 구함
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();

      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(
            <div className="test">
              <div
                key={i + 1}
                id={i + 1}
                onClick={e => setSelected(parseInt(e.target.id))}
                className={cx(
                  { weekday: true }, //전체 날짜 스타일
                  {
                    //오늘 날짜일 때 표시할 스타일 클라스네임
                    today: i + 1 === selected,
                  },
                  {
                    exist: existArr[i + 1].exist,
                  },

                  {
                    //전체 일요일 스타일
                    sunday:
                      new Date(
                        selectedYear,
                        selectedMonth - 1,
                        i + 1
                      ).getDay() === 0,
                  },
                  {
                    //전체 토요일 스타일
                    saturday:
                      new Date(
                        selectedYear,
                        selectedMonth - 1,
                        i + 1
                      ).getDay() === 6,
                  }
                )}
              >
                {i + 1}
              </div>
            </div>
          );
        }
      } else {
        dayArr.push(<div className="weekday"></div>);
      }
    }

    return dayArr;
  };

  // 선택 된 날짜 출력 (test 코드)
  console.log(
    "년도 :",
    selectedYear,
    "월 :",
    selectedMonth,
    "날짜 : ",
    selected
  );

  return (
    <div className="container">
      <div className="title">
        <h3>
          {selectedYear}년 {selectedMonth}월
        </h3>
        <div className="pagination">
          <Left onClick={prevMonth} src={LeftVector} />
          <Right onClick={nextMonth} src={RightVector} />
        </div>
      </div>
      <div className="week">{returnWeek()}</div>

      <div className="date">{returnDay()}</div>
    </div>
  );
};

export default CustomCalendar;
