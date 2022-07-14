import TopBar from "../components/TopBar";
import styled from "styled-components";
import React from "react";

const AccountName = styled.input`
  position: absolute;
  width: 380px;
  height: 50px;
  left: 24px;
  top: 291.87px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;
const AccountEmail = styled.input`
  position: absolute;
  width: 380px;
  height: 50px;
  left: 24px;
  top: 403.87px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: justify;
`;

const Password = styled.input`
  position: absolute;
  width: 380px;
  height: 50px;
  left: 24px;
  top: 590.87px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const TelephoneNum = styled.input`
  position: absolute;
  width: 380px;
  height: 50px;
  left: 24px;
  top: 703px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const NickName = styled.input`
  position: absolute;
  width: 380px;
  height: 50px;
  left: 24px;
  top: 815px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const ModifyBtn = styled.button`
  position: absolute;
  width: 182px;
  height: 60px;
  left: 222px;
  top: 879px;
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


const WrapBox = styled.div`
  position: relative;
  width: 428px;
  height: 1713px;
`;

const AccountRegistering = styled.div`
  position: absolute;
  width: 162px;
  height: 29px;
  left: 24px;
  top: 160px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 1;
`;

const AccountNameing = styled.div`
  position: absolute;
  width: 80px;
  height: 22px;
  left: 24px;
  top: 259.87px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

const ShopIntroducing = styled.div`
  position: absolute;
  width: 80px;
  height: 22px;
  left: 24px;
  top: 371.87px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

const Passwording = styled.div`
  position: absolute;
  width: 73px;
  height: 22px;
  left: 24px;
  top: 558.87px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  z-index: 1;
`;

const Telephoneing = styled.div`
  position: absolute;
  width: 40px;
  height: 22px;
  left: 24px;
  top: 671px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  z-index: 1;
`;
const RemoveAccountBtn = styled.button`
    position: absolute;
    width: 60px;
    height: 19px;
    left: 343.09px;
    top: 810px;

    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    text-decoration-line: underline;


    color: #949494;
`;
const NickNameing = styled.div`
  position: absolute;
  width: 80px;
  height: 22px;
  left: 24px;
  top: 783px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

//ui 구현
const AccountSetting = () => {
  return (
    <WrapBox>
      <TopBar />
      <AccountRegistering>가게 정보 등록</AccountRegistering>
      <AccountNameing>이름</AccountNameing>
      <AccountName type="text" placeholder="이화연" />
      <ShopIntroducing>이메일</ShopIntroducing>
      <AccountEmail
        type="text"
        placeholder="cake123@naver.com"
      />
      <Passwording>비밀번호</Passwording>
      <Password type="text" placeholder="********" />
      <Telephoneing>휴대폰 번호</Telephoneing>
      <TelephoneNum
        type="text"
        placeholder="010-0000-0000"
      />
      <NickNameing>닉네임</NickNameing>
      <NickName type="text" placeholder="이화연" />
      <ModifyBtn>수정하기</ModifyBtn>
      <RemoveAccountBtn>회원 탈퇴</RemoveAccountBtn>
    </WrapBox>
  );
};

export default AccountSetting;