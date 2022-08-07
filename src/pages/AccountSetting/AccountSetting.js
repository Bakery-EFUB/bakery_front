import TopBar from "../../components/Common/Sidebar/TopBar";
import styled from "styled-components";
import React, { useRef, useState } from "react";
import AccountRemovePop from "../../components/AccountSetting/AccountRemovePop";
import http from "../../common/http";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/features/userSlice";

const token = JSON.parse(localStorage.getItem("token"));

const AccountSetting = () => {
  const user = useAppSelector(state => state.user);
  const [popup, handlePopup] = useState(false);
  const nav = useNavigate();

  const ref = useRef([]);
  const dispatch = useAppDispatch();

  const UpdateProfile = () => {
    if (
      ref.current[2].value.trim() &&
      ref.current[0].value.trim() &&
      ref.current[1].value.trim()
    ) {
      http
        .patch(
          `/members/account/profile`,
          {
            nickname: ref.current[2].value,
            name: ref.current[0].value,
            phoneNum: ref.current[1].value,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-AUTH-TOKEN": token,
            },
          },
        )
        .then(() =>
          dispatch(
            setUser({
              ...user,
              nickname: ref.current[2].value,
              name: ref.current[0].value,
              phoneNum: ref.current[1].value,
            }),
          ),
        )
        .catch(e => console.error(e))
        .finally(() => nav(-1));
    }
    for (let i = 0; i < 3; i++) {
      if (!ref.current[i].value.trim()) {
        ref.current[i].focus();
        return;
      }
    }
  };

  return (
    <WrapBox>
      <TopBar />
      <AccountRegistering>계정 관리</AccountRegistering>
      <TextTitle>이름</TextTitle>
      <TextHolder
        type="text"
        placeholder={user.name}
        ref={el => (ref.current[0] = el)}
      />
      <TextTitle>이메일</TextTitle>
      <TextHolder type="text" value={user.email} disabled />
      <TextTitle>휴대폰 번호</TextTitle>
      <TextHolder
        type="text"
        placeholder={user.phoneNum}
        ref={el => (ref.current[1] = el)}
      />
      <TextTitle>닉네임</TextTitle>
      <TextHolder
        type="text"
        placeholder={user.nickname}
        ref={el => (ref.current[2] = el)}
      />
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
  box-sizing: border-box;
  width: 90%;
  height: 50px;
  margin: 2% 0 0 5%;
  padding: 0 20px;
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
  margin: 8% 0 0 5%;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 1;
`;

const TextTitle = styled.div`
  width: 100px;
  height: 22px;
  margin: 12% 0 0 5%;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

const ModifyBtn = styled.button`
  margin: 10% 0 5% 5%;
  width: 90%;
  height: 60px;
  background: var(--main-pink);
  border-radius: 6px;
  border: 1px solid var(--main-pink);
  color: white;
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
