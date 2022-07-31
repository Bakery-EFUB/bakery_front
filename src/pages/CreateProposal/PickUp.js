import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";
import SmallPinkButton from "../../components/SmallPinkButton";

import CustomCalendar from "../../components/Proposal/CustomCalendar";
import PageTitle from "../../components/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

const PickUp = ({ history, setHistory, original, setOriginal }) => {
  const ThisStep = 95;

  const Back = () => {
    setHistory(ThisStep);
  };

  const Next = () => {
    setHistory(ThisStep);
    // api 함수 호출 postProposal()
  };

  return (
    <div>
      <PageTitle margin="56px auto 0 auto" title="제안서 작성하기" />

      <ProgessBar step={ThisStep} before={history} />

      <ProposalText text="픽업 날짜를 선택해주세요." />

      <CalendarSection>
        <CustomCalendar original={original} setOriginal={setOriginal} />
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
          <Link to="/create/done">
            <SmallPinkButton onClick={() => Next()}>완료</SmallPinkButton>
          </Link>
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
