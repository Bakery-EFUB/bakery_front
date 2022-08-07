import TopBar from "../../components/Common/Sidebar/TopBar";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import AccountRemovePop from "../../components/AccountSetting/AccountRemovePop";
import http from "../../common/http";
import { useAppSelector } from "../../store";

const token = JSON.parse(localStorage.getItem("token"));

const AccountSetting = props => {
  const { name, nickname, phoneNum, email } = useAppSelector(
    state => state.user,
  );
  const [Profile, setProfile] = useState([]);

  useEffect(() => {
    ProfileModi();
  }, [{ Profile }]);

  const ProfileModi = () => {
    http
      .get(`/members/account/profile`)
      .then(Profile => {
        setProfile(Profile);
        console.log("받아오기 성공", Profile.data.sheetResponseDTOs);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const UpdateProfile = () => {
    http.patch(
      `/members/account/profile`,
      {
        name: Profile.Name,
        phonenum: Profile.phoneNum,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-AUTH-TOKEN": token,
        },
      },
    );
  };

  useEffect(() => {
    ProfileModi();
  }, []);

  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const {} = props;
  const [popup, handlePopup] = useState(false);

  const NameHandler = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const PhoneNumberHandler = e => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  return (
    <WrapBox>
      <TopBar />
      <AccountRegistering>계정 관리</AccountRegistering>
      <TextTitle>이름</TextTitle>
      <TextHolder
        type="text"
        value={Name}
        onChange={NameHandler}
        placeholder={name}
      />
      <TextTitle>이메일</TextTitle>
      <TextHolder type="text" placeholder={email} />
      <TextTitle>휴대폰 번호</TextTitle>
      <TextHolder
        type="text"
        value={PhoneNumber}
        onChange={PhoneNumberHandler}
        placeholder={phoneNum}
      />
      <TextTitle>닉네임</TextTitle>
      <TextHolder type="text" placeholder={nickname} />
      <PopupContainer>
        <RemoveAccountBtn
          onClick={() => {
            handlePopup(true);
          }}
        >
          회원 탈퇴
        </RemoveAccountBtn>{" "}
        {popup && <AccountRemovePop onClose={handlePopup} />}
      </PopupContainer>
      <ModifyBtn
        type="submit"
        onClick={() => {
          UpdateProfile();
        }}
      >
        수정하기
      </ModifyBtn>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  width: 100%;
  height: 100%;
`;

const TextHolder = styled.input`
  width: 90%;
  height: 50px;
  margin: 2% 0% 0% 5%;
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
  margin: 8% 0% 0% 5%;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 1;
`;

const TextTitle = styled.div`
  width: 100px;
  height: 22px;
  margin: 12% 0% 0% 5%;
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
  margin: 10% 0% 5% 5%;
  width: 90%;
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
  margin-left: 75%;
  background-color: white;
  margin-top: 7%;
  border: none;
  font-family: "Apple SD Gothic Neo";
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

export default AccountSetting;
