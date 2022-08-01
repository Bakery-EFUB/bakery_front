import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SmallWhiteButton from "../../components/Proposal/SmallWhiteButton";
import SmallGrayButton from "../../components/Proposal/SmallGrayButton";
import SmallPinkButton from "../../components/Proposal/SmallPinkButton";

import CustomCalendar from "../../components/Proposal/CustomCalendar";
import PageTitle from "../../components/Proposal/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

const PickUp = ({
  history,
  setHistory,
  original,
  setOriginal,
  dropHandler,
  // postProposal,
}) => {
  const ThisStep = 95;

  const Back = () => {
    setHistory(ThisStep);
  };

  const Next = () => {
    setHistory(ThisStep);
    setOriginal({ ...original, PickUp });
    dropHandler();
    //postProposal();
  };

  // 선택된 날짜 (예약 부분은 여기선 필요 없음)
  const [existArr, setExistArr] = useState([
    { id: 0, exist: false, reservation: "예약 정보" },
    { id: 1, exist: false, reservation: "예약 정보" },
    { id: 2, exist: false, reservation: "예약 정보" },
    { id: 3, exist: false, reservation: "예약 정보" },
    { id: 4, exist: false, reservation: "예약 정보" },
    { id: 5, exist: false, reservation: "예약 정보" },
    { id: 6, exist: false, reservation: "예약 정보" },
    { id: 7, exist: false, reservation: "예약 정보" },
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

  return (
    <div>
      <PageTitle margin="56px auto 0 auto" title="제안서 작성하기" />

      <ProgessBar step={ThisStep} before={history} />

      <ProposalText text="픽업 날짜를 선택해주세요." />

      <CalendarSection>
        <CustomCalendar
          original={original}
          setOriginal={setOriginal}
          existArr={existArr}
        />
      </CalendarSection>

      <div
        style={{
          width: "100%",
          margin: "105px  auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/create/design">
          <SmallWhiteButton onClick={() => Back()}>이전</SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          {/* <Link to="/create/done"> */}
          <SmallPinkButton onClick={() => Next()}>완료</SmallPinkButton>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};
// 완료 누르면, post 보내고, 성공 하면 그때 nabigate로 페이지 전환되게 수정하기
export default PickUp;

const CalendarSection = styled.div`
  position: "relative";

  margin: 27px 24px 0 24px;

  height: 424px;
`;
