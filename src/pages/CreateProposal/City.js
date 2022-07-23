import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SmallPinkButton from "../../components/SmallPinkButton";
import SmallWhiteButton from "../../components/SmallWhiteButton";
import SmallGrayButton from "../../components/SmallGrayButton";

import PageTitle from "../../components/PageTitle";
import CityButton from "../../components/CityButton";
import ProposalText from "../../components/Proposal/ProposalText";
import ProgessBar from "../../components/Proposal/ProgressBar";

const SmallText = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--sub-darkgray);
  margin: 0 auto 0 auto;
`;

const Wrapper = styled.div`
  height: 314px;
  margin: 32px 24px 0 24px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
`;

const City = ({ history, setHistory }) => {
  const [cityArray, setCityArray] = useState([
    { id: 1, city: "은평구", selected: false },
    { id: 2, city: "종로구", selected: false },
    { id: 3, city: "광진구", selected: false },
    { id: 4, city: "서대문구", selected: false },
    { id: 5, city: "강북구", selected: false },
    { id: 6, city: "중랑구", selected: false },
    { id: 7, city: "마포구", selected: false },
    { id: 8, city: "성북구", selected: false },
    { id: 9, city: "노원구", selected: false },
    { id: 10, city: "용산구", selected: false },
    { id: 11, city: "동대문구", selected: false },
    { id: 12, city: "도봉구", selected: false },
    { id: 13, city: "중구", selected: false },
    { id: 14, city: "성동구", selected: false },
  ]);

  const onToggle = (id) => {
    const selectedId = id;

    setCityArray(
      cityArray.map((city) =>
        city.id === selectedId ? { ...city, selected: !city.selected } : city
      )
    );
  };

  const [isDone, setIsDone] = useState(true);

  useEffect(() => {
    let city;
    for (city of cityArray) {
      if (city.selected == true) {
        setIsDone(true);
        break;
      } else {
        setIsDone(false);
      }
    }
  }, [cityArray]);

  const ThisStep = 15;

  return (
    <div>
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
      <ProgessBar step={ThisStep} before={history} />
      <ProposalText text="원하시는 지역을 선택해주세요" />
      <SmallText>(복수선택가능)</SmallText>

      <Wrapper>
        {cityArray.map((arr) => {
          if (arr.selected === true) {
            return (
              <CityButton
                selected
                key={arr.id}
                id={arr.id}
                onClick={(e) => onToggle(e)}
              >
                {arr.city}
              </CityButton>
            );
          } else {
            return (
              <CityButton key={arr.id} id={arr.id} onClick={(e) => onToggle(e)}>
                {arr.city}
              </CityButton>
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
        <Link to="/create">
          <SmallWhiteButton onClick={() => setHistory(ThisStep)}>
            이전
          </SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          {isDone ? (
            <Link to="/create/cake">
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

export default City;
