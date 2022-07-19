import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";
import SmallPinkButton from "../../components/SmallPinkButton";

import CustomCalendar from "../../components/CustomCalendar";
import PageTitle from "../../components/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

const CalendarSection = styled.div`
  position: "relative";

  margin: 27px 24px 0 24px;

  height: 424px;
`;

const PickUp = ({ history, setHistory }) => {
  const [isDone, setIsDone] = useState(true);
  const ThisStep = 95;
  return (
    <div>
      <PageTitle margin="56px auto 0 auto" title="제안서 작성하기" />

      <ProgessBar step={ThisStep} before={history} />

      <ProposalText text="픽업 날짜를 선택해주세요." />

      <CalendarSection>
        <CustomCalendar />
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
          <SmallWhiteButton onClick={() => setHistory(ThisStep)}>
            이전
          </SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          <Link to="/create/done">
            <SmallPinkButton onClick={() => setHistory(ThisStep)}>
              완료
            </SmallPinkButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickUp;
