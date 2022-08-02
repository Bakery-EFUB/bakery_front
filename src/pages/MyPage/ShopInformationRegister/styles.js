import styled from "styled-components";

//전체
export const WrapBox = styled.div`
  width: 428px;
  height: 1850px;
`;

//가게 정보 등록
export const ShopRegistering = styled.div`
  width: 162px;
  height: 29px;
  margin: 56px 0px 60px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 1;
`;

//이름
export const ShopIntroduceName = styled.div`
  width: 120px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

//인풋 칸
export const ShopIntroduce = styled.input`
  width: 380px;
  height: ${props => props.height};
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: justify;
`;

//등록하기 버튼
export const RegisterBtn = styled.button`
  margin: 70px 0px 0px 24px;
  width: 380.47px;
  height: 60px;
  left: 24px;
  top: 1593.19px;
  background: var(--main-pink);
  border-radius: 6px;
  border: 1px solid var(--main-pink);
  color: white;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
