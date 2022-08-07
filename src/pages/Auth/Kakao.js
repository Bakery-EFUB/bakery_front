import React from "react";
import styled from "styled-components";
import LoginMainImg from "../../images/LoginMainImg.svg";
import kakao from "../../images/kakao.png";

const Container = styled.div`
  padding: 24px;
`;
const Welcome = styled.div`
  color: var(--black);
  font-size: 22px;
  font-weight: 800;
  margin: 143px auto 0 0;
  width: 307px;
`;
const CenterImg = styled.div`
  background: url(${LoginMainImg});
  width: 358.91px;
  height: 381.06px;

  margin: 56px auto 0 24px;

  background-repeat: no-repeat;
  background-position: center center;
`;

const KakaoButton = styled.img`
  margin: 75px auto 0 0;

  width: 380px;
  height: 60px;
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
