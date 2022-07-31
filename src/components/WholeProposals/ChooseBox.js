import React from "react";
import styled from "styled-components";
import DropdownArrow1 from "../../images/DropdownArrow1.svg";

const ContentBoxWithMargin = styled.div`
  width: 381px;
  height: 31px;
  margin-top: 50px;
`;
const DropdownGroup = styled.div`
  justify-content: center;
  margin-top: 23px;
  display: flex;
`;
const CustomSelect = styled.select`
  font-family: "Apple SD Gothic Neo";
  margin: 5px;
  font-size: 15px;
  appearance: none;
  padding-right: 2px;
  border: none;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  color: #949494;
  text-decoration: none;

  option {
    color: #949494;
    border-radius: 10%;
    border: none;
    list-style: none;
  }
`;
const ChoooseDisplay = styled.div`
  border-radius: 25px;
  border: 2px solid var(--sub-darkgray);
  margin-left:20px;
`;
const DropdownArrow = styled.span`
  margin-right: 3px;
  & > img {
    width: 12px;
    margin-bottom: 4px;
    transition: transform 0.3s;
  }
  select:focus + & > img {
    transform: rotate(180deg);
  }
`;
const Seodaemun = [
  "동 전체",
  "북아현동",
  "신촌동",
  "연희동",
  "홍제동",
  "홍은동",
  "남가좌동",
  "북가좌동",
];
const CakeType = [
  "케이크 전체",
  "레터링케이크",
  "생화케이크",
  "미니(도시락 케이크)",
  "플라워앙금 케이크",
  "컵케이크",
  "기타",
];
const Dropdown = ({ items }) => {
  return (
    <ChoooseDisplay>
      <CustomSelect autofocus>
        {items.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </CustomSelect>
      <DropdownArrow>
        <img src={DropdownArrow1} alt="dropdown" />
      </DropdownArrow>
    </ChoooseDisplay>
  );
};
const ChooseBox = () => {
  return (
    <div>
      <ContentBoxWithMargin>
        <DropdownGroup>
          <Dropdown items={Seodaemun}></Dropdown>
          <Dropdown items={CakeType}></Dropdown>
        </DropdownGroup>
      </ContentBoxWithMargin>
    </div>
  );
};
export default ChooseBox;
