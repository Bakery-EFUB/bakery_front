import React, { useState } from "react";
import styled from "styled-components";

import SmallPinkButton from "../../components/SmallPinkButton";
import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";

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

const ProgessBar = styled.div`
  height: 4px;

  margin: 11px 24px 0 24px;

  background-color: var(--main-pink);
  border: none;
`;

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
  margin-top: 19px;

  width: 380px;
  height: 256px;

  /* background */

  background: var(--background);
  box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
  border-radius: 6px;
`;

const Design = () => {
  const [isDone, setIsDone] = useState(true);

  return (
    <div>
      <ProgessBar />
      <Text>디자인 시안이 있다면 알려주세요.</Text>
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

export default Design;
