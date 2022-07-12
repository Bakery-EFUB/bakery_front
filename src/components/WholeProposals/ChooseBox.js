import React from "react";
import styled from "styled-components";
import DropdownArrow1 from "../../images/DropdownArrow1.svg";

const ContentBoxWithMargin = styled.div`
  padding: 0 23.5px;
  margin-top: 70px;
`;
const DropdownGroup = styled.div`
  margin-top: 23px;
  display: flex;
  gap: 10px 53px;
  flex-wrap: wrap;
`;
const CustomSelect = styled.select`
  font-family: 'Apple SD Gothic Neo';
  position: relative;
  font-size: 17px;
  appearance: none;
  padding-right: 8px;
  border: none;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  color: #949494;
  text-decoration: none;

  option{
    color: #949494;
    border-radius: 10%;
    border: none;
    list-style: none;

  }
`;
const DropdownArrow = styled.span`
  width: 24px;
  & > img {
    color: #c4c4c4;
    width: 12px;
    margin-bottom: 4px;
    transition: transform 0.3s;
  }
  select:focus + & > img {
    color: #c4c4c4;
    transform: rotate(180deg);
  }
`;
const Dropdown = ({ items }) => {
    return (
      <div>
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
      </div>
    );
  };
const ChooseBox = () =>{
    const RegionGu = ['구 전체','서대문구','종로구','마포구','은평구','중구','강북구','중랑구','노원구','성북구','용산구','동대문구','도봉구','성동구'];

    const CakeType = ['케이크 전체','레터링케이크', '생화케이크','미니(도시락 케이크)','플라워앙금 케이크','컵케이크','기타'];
    return(
        <div>
            <ContentBoxWithMargin>
                <DropdownGroup>
                    <Dropdown items = {RegionGu}>
                    </Dropdown>
                    <Dropdown items = {CakeType}>
                    </Dropdown>
                </DropdownGroup>
            </ContentBoxWithMargin>
        </div>
    )
};
export default ChooseBox;