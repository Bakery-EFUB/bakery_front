import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SmallPinkButton from "../../components/SmallPinkButton";
import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";
import PageTitle from "../../components/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";

import ProgessBar from "../../components/Proposal/ProgressBar";

const Button = styled.button`
  height: 60px;
  width: calc(100% - 48px);
  margin: 20px 24px 0 24px;

  background-color: var(--main-pink);
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  border: none;

  color: var(--sub-yellow);

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
`;

const ImageBox = styled.div`
  margin: 19px 24px 0 24px;

  height: 256px;

  /* background */

  background: var(--background);
  box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
  border-radius: 6px;
`;

const Design = ({ history, setHistory }) => {
  const [isDone, setIsDone] = useState(true);
  const ThisStep = 90;

  return (
    <div>
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />

      <ProgessBar step={ThisStep} before={history} />

      <ProposalText text="디자인 시안이 있다면 알려주세요." />
      <Button>사진 업로드</Button>
      <ImageBox />
      <div
        style={{
          width: "100%",
          margin: "105px  auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/create/price">
          <SmallWhiteButton onClick={() => setHistory(ThisStep)}>
            이전
          </SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          <Link to="/create/pickup">
            <SmallPinkButton onClick={() => setHistory(ThisStep)}>
              완료
            </SmallPinkButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Design;
