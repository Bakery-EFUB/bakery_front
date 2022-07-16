import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/TopBar";

import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";
import SmallPinkButton from "../../components/SmallPinkButton";

import CustomCalendar from "../../components/CustomCalendar";
import PageTitle from "../../components/PageTitle";
import ProposalText from "../../components/ProposalText";

const ProgessBar = styled.div`
  height: 4px;

  margin: 11px 24px 0 24px;

  background-color: var(--main-pink);
  border: none;
`;

const Text = styled.p`
  font-family: "Apple SD Gothic Neo";

  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;

  height: 26px;

  margin: 57px auto 0 auto;
`;

const CalendarSection = styled.div`
  position: "relative";

  margin: 27px 24px 0 24px;

  height: 424px;
`;

const PickUp = () => {
  const [isDone, setIsDone] = useState(true);
  return (
    <div>
      <PageTitle margin="56px auto 0 auto" title="제안서 작성하기" />

      <ProgessBar />
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
        <SmallWhiteButton>이전</SmallWhiteButton>

        <div style={{ marginLeft: "6px" }}>
          {isDone ? (
            <SmallPinkButton onClick={() => setIsDone(!isDone)}>
              완료
            </SmallPinkButton>
          ) : (
            <SmallGrayButton>완료</SmallGrayButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default PickUp;
