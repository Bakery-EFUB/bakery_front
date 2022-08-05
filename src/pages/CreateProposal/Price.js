import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SmallPinkButton from "../../components/Proposal/SmallPinkButton";
import SmallWhiteButton from "../../components/Proposal/SmallWhiteButton";
import SmallGrayButton from "../../components/Proposal/SmallGrayButton";

import PageTitle from "../../components/Common/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

const Price = ({ history, setHistory, original, setOriginal }) => {
  const [isChecked, setIsChecked] = useState(original.priceId);

  const [prices, setPrices] = useState([
    { id: 1, price: "1만원 미만", min: 0, max: 1 },
    { id: 2, price: "1만원 이상 3만원 미만", min: 1, max: 3 },
    { id: 3, price: "3만원 이상 7만원 미만", min: 3, max: 7 },
    { id: 4, price: "7만원 이상 10만원 미만", min: 7, max: 10 },
    { id: 5, price: "10만원 이상", min: 10, max: 10 },
  ]);

  const ThisStep = 75;

  const onToggle = id => {
    setIsChecked(id);
  };

  const Back = () => {
    setHistory(ThisStep);
  };

  const Next = () => {
    setHistory(ThisStep);
    setOriginal({
      ...original,
      priceId: isChecked,
      min: prices[isChecked - 1].min,
      max: prices[isChecked - 1].max,
    });
  };

  return (
    <div>
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
      <ProgessBar step={ThisStep} before={history} />

      <ProposalText text="원하는 가격대를 선택해주세요." />

      <Wrapper>
        {prices.map(price => {
          if (price.id === isChecked) {
            return (
              <div
                onClick={() => onToggle(price.id)}
                className="item"
                key={price.id}
                style={{
                  display: "flex",
                  height: "60px",
                }}
              >
                <Circle checked />
                <Option>{price.price}</Option>
              </div>
            );
          } else {
            return (
              <div
                onClick={() => onToggle(price.id)}
                className="item"
                key={price.id}
                style={{
                  display: "flex",
                  height: "60px",
                }}
              >
                <Circle />
                <Option>{price.price}</Option>
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
        <Link to="/create/taste">
          <SmallWhiteButton onClick={() => Back()}>이전</SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          {isChecked ? (
            <Link to="/create/design">
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

export default Price;

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
  width: 150px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  line-height: 14px;

  color: var(--black);
`;
