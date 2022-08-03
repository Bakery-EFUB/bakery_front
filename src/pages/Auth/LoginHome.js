import React from "react";
import styled from "styled-components";
import LoginMainImg from "../../images/LoginMainImg.svg";
import Button from "../../components/Button";

const Container = styled.div`
  width: 100%;
  margin: 10%;
`;
const Welcome = styled.div`
  color: var(--black);
  font-size: 22px;
  font-weight: 800;
  position: absolute;
  left: 10%;
  top: 12%;
`;
const CenterImg = styled.div`
  background: url(${LoginMainImg});
  width: 358.91px;
  height: 381.06px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  background-position: center center;
`;

const LoginButtons = styled.div`
  position: absolute;
  left: 10%;
  bottom: 5%;
  width: 100%;
`;

const LoginHome = () => {
  return (
    <Container>
      <Welcome>
        안녕하세요!
        <br />
        CAKER에 오신 것을 환영합니다.
      </Welcome>
      <CenterImg></CenterImg>
      <LoginButtons>
        <Button
          onClick={() => {
            location.href = "https://caker.shop/oauth2/authorization/kakao";
          }}
          text={"가게 회원 로그인"}
        ></Button>
        <Button text={"일반 회원 로그인"}></Button>
      </LoginButtons>
    </Container>
  );
};

export default LoginHome;
