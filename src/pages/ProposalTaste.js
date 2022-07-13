import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";

import SmallPinkButton from "../components/SmallPinkButton";
import SmallWhiteButton from "../components/SmallWhiteButton";

import PageTitle from "../components/PageTitle";

const Text = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  width: 290px;
  height: 26px;

  margin: ${props => props.margin};
`;

const ProgessBar = styled.div`
  width: 380px;
  height: 4px;
  margin: 20px auto 0 auto;
  background-color: var(--main-pink);
  border: none;
`;

const Wrapper = styled.div`
  width: 380px;
  height: auto;

  margin: 47px auto 0 auto;

  border: solid 1px var(--sub-pink);
  border-radius: 5px;

  grid-template-rows: repeat(2, 60px);

  .item:not(:last-child) {
    border-bottom: 1px solid var(--sub-pink);
  }
`;

const Circle = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid var(--main-pink);
  border-radius: 50%;

  background-color: ${props => (props.checked ? "var(--main-pink)" : "none")};

  margin: auto 0 auto 20px;
`;

const Option = styled.p`
  margin: auto 0 auto 23px;
  width: 75px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  line-height: 14px;

  color: var(--black);
`;

const Exp = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  /* identical to box height */

  color: var(--sub-darkgray);
`;

const DesignInput = styled.div`
  width: 380px;

  min-height: 50px;
  height: auto;

  margin: 38px auto 0 auto;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: none;
  padding: auto;

  textarea {
    width: 346px;
    height: 17px;

    resize: none;
    overflow: auto;

    padding: 17px;

    background: transparent;
    border: none;
    color: var(--sub-darkgray);

    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  textarea::placeholder {
    color: var(--background);
  }
  textarea:focus {
    outline: none;
  }
`;

const ProposalTaste = () => {
  const [isChecked, setIsChecked] = useState(1);

  const [tastes, setTastes] = useState([
    { id: 1, taste: "초코" },
    { id: 2, taste: "바닐라" },
    { id: 3, taste: "기타" },
  ]);

  const onToggle = id => {
    setIsChecked(id);
  };

  return (
    <div>
      <TopBar />
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
      <ProgessBar />
      <Text margin="44px auto 0 auto">어떤 맛을 원하시나요?</Text>

      <Wrapper>
        {tastes.map(taste => {
          if (taste.id === isChecked) {
            return (
              <div
                onClick={() => onToggle(taste.id)}
                className="item"
                key={taste.id}
                style={{
                  display: "flex",
                  height: "60px",
                }}
              >
                <Circle checked />
                <Option>{taste.taste}</Option>
              </div>
            );
          } else {
            return (
              <div
                onClick={() => onToggle(taste.id)}
                className="item"
                key={taste.id}
                style={{
                  display: "flex",
                  height: "60px",
                }}
              >
                <Circle />
                <Option>{taste.taste}</Option>
              </div>
            );
          }
        })}
      </Wrapper>

      <Text margin="100px auto 0 auto">디자인에 대해 상세히 적어주세요!</Text>

      <DesignInput>
        <textarea placeholder="ex) 레터링을 ‘생일 축하해'로 해주세요!" />
      </DesignInput>

      <div
        style={{
          margin: "154px 24px auto 24px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SmallWhiteButton>이전</SmallWhiteButton>
        <SmallPinkButton>다음</SmallPinkButton>
      </div>
    </div>
  );
};

export default ProposalTaste;
