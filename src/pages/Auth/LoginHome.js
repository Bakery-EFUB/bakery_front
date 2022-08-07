import React from "react";
import styled from "styled-components";
import LoginMainImg from "../../images/LoginMainImg.svg";
import Button from "../../components/Button";
import http from "../../common/http";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Welcome = styled.div`
  color: var(--black);
  margin: 20% 10% 0;
  font-size: 22px;
  font-weight: 800;
`;
const CenterImg = styled.div`
  background: url(${LoginMainImg});
  height: 381.06px;
  width: 358.91px;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 8% auto 3%;
`;

const LoginButtons = styled.div`
  margin-bottom: 8%;
  text-align: center;
`;

const LoginHome = () => {
  const BakerLogin = async () => {
    http
      .get("/members/signup/baker")
      .then(res => console.log("성공", res))
      .catch(err => console.log(err));
  };

  const nav = useNavigate();

  const ClientLogin = () => {
    nav("/");
  };

  return (
    <Container>
      <Welcome>
        안녕하세요!
        <br />
        CAKER에 오신 것을 환영합니다.
      </Welcome>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "8%",
          marginBottom: "8%",
        }}
      >
        <CenterImg></CenterImg>
      </div>
      <LoginButtons>
        <Button onClick={() => BakerLogin()} text={"가게 회원 로그인"}></Button>
        <Button
          onClick={() => ClientLogin()}
          text={"일반 회원 로그인"}
        ></Button>
      </LoginButtons>
    </Container>
  );
};

export default LoginHome;
