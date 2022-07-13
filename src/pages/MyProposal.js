import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";

import Rectangle147 from "../images/Rectangle147.svg";
import CommentLogo from "../images/CommentLogo.svg";

import SmallPinkButton from "../components/SmallPinkButton";
import SmallWhiteButton from "../components/SmallWhiteButton";

import PageTitle from "../components/PageTitle";

const Highlight = styled.p`
  margin: auto;
  margin-top: 56px;

  width: 186px;
  height: 26px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
`;

const ImageBox = styled.img`
  margin: auto;
  margin-top: 37px;
  width: 380px;
  height: 300px;

  background: url(${Rectangle147});
  border-radius: 6px;
`;

const Text = styled.p`
  /* 상 우 하 좌 */
  margin: 30px 0px 0px 30px;

  width: 154.57px;
  height: 32.73px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
`;

const PinkRectangle = styled.div`
  box-sizing: border-box;

  margin: 25px 0px 0px 24px;
  padding: 20px;

  width: 380px;
  height: 320px;

  background: var(--sub-pink);
  border-radius: 6px;
`;

const Option = styled.div`
  display: flex;
  margin-bottom: 30px;

  .option {
    width: 99px;
    margin: 0;
    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    color: var(--main-pink);
  }

  .content {
    margin: 0;

    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: var(--black-text);
  }
`;

const Comment = styled.p`
  height: 29px;

  margin: 54px 0px 0px 24px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: var(--black-text);
`;

const CommentSection = styled.div`
  margin-top: 13px;
  height: auto;
  padding-bottom: 70px;
`;

const CommentYellowBox = styled.div`
  box-sizing: border-box;
  width: 428px;
  height: 100px;

  background: var(--sub-yellow);

  padding: 24px;
`;

const CommentPinkBox = styled.div`
  display: flex;

  box-sizing: border-box;
  width: 428px;
  height: 100px;

  background: var(--sub-pink);

  padding: 24px;
  padding-left: 42px;
`;

const CommentInfo = styled.div`
  display: flex;

  margin-bottom: 12px;
`;

const Nickname = styled.p`
  margin: 0;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: var(--black-text);
`;

const CommentTime = styled.p`
  height: 14px;

  margin: 0 0 0 15px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;

  color: var(--background);
`;

const CommentToggle = styled.p`
  width: 25px;
  height: 17px;

  margin: 0;
  margin-left: auto;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  text-align: right;

  color: var(--sub-darkgray);
`;

const CommentContent = styled.p`
  width: 315px;
  height: 17px;

  margin: 0;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: var(--black-text);
`;
const Input = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  width: 428px;
  height: 70px;
  background-color: var(--white);

  input {
    border: solid 2px var(--background);
    padding-left: 24px;

    background: transparent;

    color: var(--background);
    width: 332px;
    height: 70px;

    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  input::placeholder {
    color: var(--background);
  }

  input:focus {
    outline: none;
  }
  button {
    width: 96px;
    height: 70px;

    background: var(--main-pink);

    border: none;

    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    text-align: center;
    text-transform: uppercase;

    color: var(--white);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyProposal = () => {
  return (
    <Wrapper>
      <TopBar />
      <PageTitle margin="56px auto 0 auto" title="내 제안서"></PageTitle>
      <ImageBox />
      <Text>레터링 케이크</Text>
      <PinkRectangle>
        <Option>
          <p className="option">작성일</p>
          <p className="content">2022.05.01</p>
        </Option>
        <Option>
          <p className="option">사이즈</p>
          <p className="content">1호</p>
        </Option>
        <Option>
          <p className="option">맛</p>
          <p className="content">초코</p>
        </Option>
        <Option>
          <p className="option">디자인</p>
          <p className="content">레터링 생일축하해로 해주세요!</p>
        </Option>
        <Option>
          <p className="option">가격대</p>
          <p className="content">3만원 이상 7만원 미만</p>
        </Option>
        <Option>
          <p className="option">픽업 날짜</p>
          <p className="content">2022.06.01</p>
        </Option>
      </PinkRectangle>
      <div
        style={{
          width: "383px",
          display: "flex",
          justifyContent: "space-between",
          margin: "36px auto 0 auto",
        }}
      >
        <SmallPinkButton>수정</SmallPinkButton>
        <SmallWhiteButton>삭제</SmallWhiteButton>
      </div>

      <Comment>댓글 2</Comment>
      <CommentSection>
        <CommentYellowBox>
          <CommentInfo>
            <Nickname>터틀힙</Nickname>
            <CommentTime>2022.05.10. 15:00</CommentTime>
            <CommentToggle>삭제</CommentToggle>
          </CommentInfo>

          <CommentContent>
            안녕하세요~ 4월 5일 2시부터 8시 사이 픽업 가능합니다~
          </CommentContent>
        </CommentYellowBox>

        <CommentPinkBox>
          <img
            src={CommentLogo}
            style={{ marginRight: "12px", width: "10px", height: "10px" }}
          />
          <div style={{ width: "100%" }}>
            <CommentInfo>
              <Nickname>작성자</Nickname>
              <CommentTime>2022.05.10. 15:00</CommentTime>
              <CommentToggle>답글</CommentToggle>
            </CommentInfo>

            <CommentContent>픽업 시간 5시로 하겠습니다!</CommentContent>
          </div>
        </CommentPinkBox>
      </CommentSection>

      <Input>
        <input placeholder="댓글을 입력해주세요." /> <button>등록</button>
      </Input>
    </Wrapper>
  );
};

export default MyProposal;
