import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SmallPinkButton from "../../components/Proposal/SmallPinkButton";
import SmallWhiteButton from "../../components/Proposal/SmallWhiteButton";
import SmallGrayButton from "../../components/Proposal/SmallGrayButton";

import PageTitle from "../../components/Common/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

const Cake = ({ history, setHistory, original, setOriginal }) => {
  const [isChecked, setIsChecked] = useState(original.cakeId);

  const [cakes, setCakes] = useState([
    { id: 1, cake: "레터링 케이크" },
    { id: 2, cake: "미니(도시락) 케이크" },
    { id: 3, cake: "생화 케이크" },
    { id: 4, cake: "플라워앙금 케이크" },
    { id: 5, cake: "컵 케이크" },
    { id: 6, cake: "기타 케이크" },
  ]);

  const onToggle = id => {
    setIsChecked(id);
  };

  const ThisStep = 30;

  const Back = () => {
    setHistory(ThisStep);
  };

  const Next = () => {
    setHistory(ThisStep);
    setOriginal({
      ...original,
      cakeId: isChecked,
      cake: cakes[isChecked - 1].cake,
    });
  };

  return (
    <div>
      <PageTitle title="제안서 수정하기" margin="56px auto 0 auto" />
      <ProgessBar step={ThisStep} before={history} />
      <ProposalText text="어떤 케이크를 원하시나요?" />

      <Wrapper>
        {cakes.map(cake => {
          if (cake.id === isChecked) {
            return (
              <div
                onClick={() => onToggle(cake.id)}
                className="item"
                key={cake.id}
                style={{
                  display: "flex",
                  height: "60px",
                }}
              >
                <Circle checked />
                <Option>{cake.cake}</Option>
              </div>
            );
          } else {
            return (
              <div
                onClick={() => onToggle(cake.id)}
                className="item"
                key={cake.id}
                style={{
                  display: "flex",
                  height: "60px",
                }}
              >
                <Circle />
                <Option>{cake.cake}</Option>
              </div>
            );
          }
        })}
      </Wrapper>
      <div
        style={{
          width: "100%",
          margin: "105px  auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/edit/city">
          <SmallWhiteButton onClick={() => Back()}>이전</SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          {isChecked ? (
            <Link to="/edit/size">
              <SmallPinkButton onClick={() => Next()}>완료</SmallPinkButton>
            </Link>
          ) : (
            <SmallGrayButton>완료</SmallGrayButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cake;

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

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  line-height: 14px;

  color: var(--black);
`;
