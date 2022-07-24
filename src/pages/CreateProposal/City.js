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

const City = ({ history, setHistory, original, setOriginal }) => {
  const [cityArray, setCityArray] = useState([
    { id: 1, city: "북아현동", selected: false },
    { id: 2, city: "충현동", selected: false },
    { id: 3, city: "천연동", selected: false },
    { id: 4, city: "신촌동", selected: false },
    { id: 5, city: "연희동", selected: false },
    { id: 6, city: "홍제1동", selected: false },
    { id: 7, city: "홍제2동", selected: false },
    { id: 8, city: "홍제3동", selected: false },
    { id: 9, city: "홍은1동", selected: false },
    { id: 10, city: "홍은2동", selected: false },
    { id: 11, city: "남가좌1동", selected: false },
    { id: 12, city: "남가좌2동", selected: false },
    { id: 13, city: "북가좌1동", selected: false },
    { id: 14, city: "북가좌2동", selected: false },
  ]);

  const [isDone, setIsDone] = useState(true);

  const ThisStep = 15;

  // 맨 처음에 한번만 처리하는 부분
  useEffect(() => {
    setCityArray(
      cityArray.map(city =>
        original.cityId.includes(city.id)
          ? { ...city, selected: true }
          : { ...city, selected: false },
      ),
    );
  }, []);

  // 도시 선택하기
  const onToggle = id => {
    setCityArray(
      cityArray.map(city =>
        city.id === id ? { ...city, selected: !city.selected } : city,
      ),
    );
  };

  // 완료 버튼 렌더링
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

  const Back = () => {
    setHistory(ThisStep);
  };

  // 선택한 id 저장 (부모에 전달)
  const Next = () => {
    let idArr = [];
    cityArray.map(city => {
      if (city.selected == true) {
        idArr.push(city.id);
      }
    });

    let cityArr = [];
    cityArray.map(city => {
      if (city.selected == true) {
        cityArr.push(city.city);
      }
    });
    setOriginal({ ...original, cityId: idArr, city: cityArr });
    setHistory(ThisStep);
  };

  return (
    <div>
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
      <ProgessBar step={ThisStep} before={history} />
      <ProposalText text="원하시는 지역을 선택해주세요" />
      <SmallText>(복수선택가능)</SmallText>

      <Wrapper>
        {cityArray.map(arr => {
          if (arr.selected === true) {
            return (
              <CityButton
                selected
                key={arr.id}
                id={arr.id}
                onClick={e => onToggle(e)}
              >
                {arr.city}
              </CityButton>
            );
          } else {
            return (
              <CityButton key={arr.id} id={arr.id} onClick={e => onToggle(e)}>
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
          <SmallWhiteButton onClick={() => Back()}>이전</SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          {isDone ? (
            <Link to="/create/cake">
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

export default City;

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
