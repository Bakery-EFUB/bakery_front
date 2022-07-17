import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SmallPinkButton from "../../components/SmallPinkButton";
import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";

import PageTitle from "../../components/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

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

const Cake = ({ history, setHistory }) => {
  const [isChecked, setIsChecked] = useState(null);

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

  return (
    <div>
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
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
        <Link to="/proposal/city">
          <SmallWhiteButton onClick={() => setHistory(ThisStep)}>
            이전
          </SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          {isChecked ? (
            <Link to="/proposal/size">
              <SmallPinkButton onClick={() => setHistory(ThisStep)}>
                완료
              </SmallPinkButton>
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
