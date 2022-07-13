import React from "react";
import styled from "styled-components";
import DropdownArrow1 from "../../images/DropdownArrow1.svg";

const ContentBoxWithMargin = styled.div`
  position: absolute;
  width: 381px;
  height: 31px;
  left: 24px;
  top: 208px;
`;
const DropdownGroup = styled.div`
  margin-top: 23px;
  display: flex;
  gap: 10px 20px;
  flex-wrap: wrap;
`;
const CustomSelect = styled.select`
  font-family: 'Apple SD Gothic Neo';
  position: relative;
  font-size: 15px;
  appearance: none;
  padding-right: 2px;
  border:none;
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
  & > img {
    width: 12px;
    margin-bottom: 4px;
    transition: transform 0.3s;
  }
  select:focus + & > img {
    transform: rotate(180deg);
  }
`;
const RegionGu = ['구 전체','서대문구','종로구','마포구','중구','용산구','성동구'];
const Seodaemun = ['동 전체','북아현동','신촌동','연희동','홍제동','홍은동','남가좌동','북가좌동'];
const CakeType = ['케이크 전체','레터링케이크', '생화케이크','미니(도시락 케이크)','플라워앙금 케이크','컵케이크','기타'];
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
    return(
        <div>
            <ContentBoxWithMargin>
                <DropdownGroup>
                    <Dropdown items = {RegionGu}>
                    </Dropdown>
                    <Dropdown items = {Seodaemun}>
                    </Dropdown>
                    <Dropdown items = {CakeType}>
                    </Dropdown>
                </DropdownGroup>
            </ContentBoxWithMargin>
        </div>
    )
};
export default ChooseBox;