import TopBar from "../components/TopBar";
import styled from "styled-components";
import React, {useState} from "react";
import AccountRemovePop from "../components/AccountSetting/AccountRemovePop";


const WrapBox = styled.div`
  width: 428px;
  height: 1000px;
`;

const AccountName = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  left: 24px;
  top: 291.87px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  z-index: 0;
`;
const AccountEmail = styled.input`
  width: 380px;
  height:50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: justify;
  z-index: 0;
`;

const Password = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  z-index: 0;
`;

const TelephoneNum = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  z-index: 0;
`;

const NickName = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  z-index: 0;
`;



const AccountRegistering = styled.div`
  width: 162px;
  height: 29px;
  margin: 56px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 1;
`;

const AccountNameing = styled.div`
  width: 80px;
  height: 22px;
  margin: 70px 0px 0px 24px;
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
  width: 80px;
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

const Passwording = styled.div`
  width: 73px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  z-index: 1;
`;

const Telephoneing = styled.div`
  width: 90px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  z-index: 1;
`;
const NickNameing = styled.div`
  width: 60px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  z-index: 1;
`;

const ModifyBtn = styled.button`
  margin: 70px 0px 0px 24px;
  width: 380.47px;
  height: 60px;
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
const RemoveAccountBtn = styled.button`
    width: 90px;
    height: 19px;
    margin-left: 329px;
    background-color: white;
    margin-top: 20px;
    border: none;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    text-decoration-line: underline;


    color: var(--sub-darkgray);
`;

const PopupContainer = styled.div`
  z-index: 1000;
`;

//ui 구현
const AccountSetting = (props) => {

  const {} = props;
  const [popup, handlePopup] = useState(false);

  return (
    <WrapBox>
      <TopBar />
      <AccountRegistering>계정 관리</AccountRegistering>
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
      <PopupContainer>
        <RemoveAccountBtn onClick={()=>{handlePopup(true);}}>회원 탈퇴</RemoveAccountBtn> {popup && <AccountRemovePop onClose = {handlePopup}/>}
      </PopupContainer>
      <ModifyBtn>수정하기</ModifyBtn>
      
    </WrapBox>
  );
};

export default AccountSetting;