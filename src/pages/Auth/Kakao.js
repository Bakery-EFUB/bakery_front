import React from "react";
import styled from "styled-components";
import LoginMainImg from "../../images/LoginMainImg.svg";
import kakao from "../../images/kakao.png";

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
  margin: 10% auto 4%;
`;

const KakaoButton = styled.img`
  cursor: pointer;
  width: 90%;
  height: 58px;
  margin: 10% auto 15%;
`;

const Kakao = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Container>
        <Welcome>
          안녕하세요!
          <br />
          CAKER에 오신 것을 환영합니다.
        </Welcome>
        <CenterImg></CenterImg>

        <KakaoButton
          src={kakao}
          onClick={() => {
            location.href = "https://dev.caker.shop/oauth2/authorization/kakao";
          }}
        ></KakaoButton>
      </Container>
    </div>
  );
};

export default Kakao;
