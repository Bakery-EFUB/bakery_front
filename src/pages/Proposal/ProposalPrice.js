import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/TopBar";

import SmallPinkButton from "../../components/SmallPinkButton";
import SmallWhiteButton from "../../components/SmallWhiteButton";

import PageTitle from "../../components/PageTitle";

const Text = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  width: 290px;
  height: 26px;
  margin: 44px auto 0 auto;
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
  width: 150px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  line-height: 14px;

  color: var(--black);
`;

const ProposalPrice = () => {
  const [isChecked, setIsChecked] = useState(3);

  const [prices, setPrices] = useState([
    { id: 1, price: "1만원 미만" },
    { id: 2, price: "1만원 이상 3만원 미만" },
    { id: 3, price: "3만원 이상 7만원 미만" },
    { id: 4, price: "7만원 이상 10만원 미만" },
    { id: 5, price: "10만원 이상" },
  ]);

  const onToggle = id => {
    setIsChecked(id);
  };

  return (
    <div>
      <TopBar />
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
      <ProgessBar />
      <Text>케이크 사이즈를 선택해주세요.</Text>

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
          margin: "174px 24px auto 24px",
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

export default ProposalPrice;
