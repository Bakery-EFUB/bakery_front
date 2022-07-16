import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SmallPinkButton from "../../components/SmallPinkButton";
import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";
import PageTitle from "../../components/PageTitle";

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

const Wrapper = styled.div`
  height: auto;

  margin: 47px 24px 0 24px;

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
  min-height: 50px;
  height: auto;

  margin: 38px 24px 0 24px;
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

const Taste = () => {
  const [isChecked, setIsChecked] = useState(null);

  const [tastes, setTastes] = useState([
    { id: 1, taste: "초코" },
    { id: 2, taste: "바닐라" },
    { id: 3, taste: "기타" },
  ]);

  const onToggle = id => {
    setIsChecked(id);
  };

  const [isDone, setIsDone] = useState(true);

  return (
    <div>
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
          width: "100%",
          margin: "105px  auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/proposal/size">
          <SmallWhiteButton>이전</SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          {isChecked ? (
            <Link to="/proposal/price">
              <SmallPinkButton>완료</SmallPinkButton>
            </Link>
          ) : (
            <SmallGrayButton>완료</SmallGrayButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Taste;
