import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import SmallWhiteButton from "../../components/Proposal/SmallWhiteButton";
import SmallGrayButton from "../../components/Proposal/SmallGrayButton";
import SmallPinkButton from "../../components/Proposal/SmallPinkButton";

import CustomCalendar from "../../components/Proposal/CustomCalendar";
import PageTitle from "../../components/Common/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

const PickUp = ({
  history,
  setHistory,
  original,
  setOriginal,
  EditProposal,
}) => {
  const ThisStep = 95;

  const nav = useNavigate();

  const Back = () => {
    setHistory(ThisStep);
  };

  const Next = () => {
    setHistory(ThisStep);
    EditProposal();
    nav("/edit/done");
  };

  return (
    <div>
      <PageTitle margin="56px auto 0 auto" title="픽업 날짜 수정하기" />

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
        <Link to="/edit/design">
          <SmallWhiteButton onClick={() => Back()}>이전</SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          <SmallPinkButton onClick={() => Next()}>완료</SmallPinkButton>
        </div>
      </div>
    </div>
  );
};

export default PickUp;

const CalendarSection = styled.div`
  position: "relative";

  margin: 27px 24px 0 24px;

  height: 424px;
`;
