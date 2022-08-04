import TopBar from "../../components/Common/Sidebar/TopBar";
import styled from "styled-components";
import React, {useState} from "react";
import AccountRemovePop from "../../components/AccountSetting/AccountRemovePop";
import axios from "axios";

const WrapBox = styled.div`
  width: 428px;
  height: 1000px;
`;

const TextHolder = styled.input`
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

const TextTitle = styled.div`
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

const token = JSON.parse(localStorage.getItem("token"));

//ui 구현
const AccountSetting = (props) => {

  const [Name,setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [NickName, setNickName] = useState("");
  console.log(MainFile);

  const {} = props;
  const [popup, handlePopup] = useState(false);

  let body  = {
    storedata:{
      name: Name,
      phonenumber: PhoneNumber,
      nickname : NickName,
      email: Email,
    },
  };

  const NameHandler = e =>{
    e.preventDefault();
    setName(e.target.value);
  };
  const PhoneNumberHandler = e =>{
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const NickNameHandler = e => {
    e.preventDefault();
    setNickName(e.target.value);
  };
  const EmailHandler = e =>{
    e.preventDefault();
    setEmail(e.target.value);
  };

  const submitHandler = e =>{
    e.preventDefault();
    FormData.append("data", JSON.stringify(body));
    const postSurvey = axios({
      method : "PATCH",
      url: "https://caker.shop/members/account/profile",
      mode:"cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    console.log(postSurvey);
  }
  return (
    <WrapBox>
      <TopBar />
      <AccountRegistering>계정 관리</AccountRegistering>
      <TextTitle>이름</TextTitle>
      <TextHolder type="text" value={Name} onChange={NameHandler} placeholder={Name}/>
      <TextTitle>이메일</TextTitle>
      <TextHolder
        type="text"
        value={Email}
        onChange={EmailHandler}
        placeholder={Email}
      />
      <TextTitle>휴대폰 번호</TextTitle>
      <TextHolder
        type="text"
        value={PhoneNumber}
        onChange ={PhoneNumberHandler}
        placeholder ={PhoneNumber}
      />
      <TextTitle>닉네임</TextTitle>
      <TextHolder 
        type="text" 
        placeholder={NickName}
        onChange = {PhoneNumberHandler}
        value={NickName} />
      <PopupContainer>
        <RemoveAccountBtn onClick={()=>{handlePopup(true);}}>회원 탈퇴</RemoveAccountBtn> {popup && <AccountRemovePop onClose = {handlePopup}/>}
      </PopupContainer>
      <ModifyBtn type="submit">수정하기</ModifyBtn>
      
    </WrapBox>
  );
};

export default AccountSetting;