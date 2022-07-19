import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../components/TopBar";

import BigPinkButton from "../../components/BigPinkButton";
import DoneImage from "../../images/DoneImage.svg";

const Image = styled.div`
  background: url(${DoneImage});

  width: 379.07px;
  height: 390px;

  margin: 93px auto 0 auto;
`;

const BigText = styled.p`
  margin: 53px auto 0 auto;

  /* title */

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;

  /* black text */

  color: var(--black-text);
`;

const SmallText = styled.p`
  margin: 6px auto 0 auto;
  /* sem16 */

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  /* black text */

  color: var(--black-text);
`;

const UnderScoreText = styled.p`
  margin: 14px auto 0 auto;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.06em;
  text-decoration-line: underline;
  text-transform: uppercase;

  /* main pink */

  color: var(--main-pink);
`;
const Done = () => {
  return (
    <div>
      <Image />

      <BigText>제안서 작성하기 완료!</BigText>
      <SmallText>곧 있으면 사장님들이 연락을 드릴거에요</SmallText>

      <Link to="/" style={{ textDecoration: "none" }}>
        <BigPinkButton margin="68px 24px 0px 24px">
          내 제안서 보러가기
        </BigPinkButton>
      </Link>

      <Link to="/">
        <UnderScoreText>메인 홈으로 가기</UnderScoreText>
      </Link>
    </div>
  );
};

export default Done;
