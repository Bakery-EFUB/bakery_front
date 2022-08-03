import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../components/Common/Sidebar/TopBar";

import CommentLogo from "../images/CommentLogo.svg";

import SmallPinkButton from "../components/Proposal/SmallPinkButton";
import SmallWhiteButton from "../components/Proposal/SmallWhiteButton";

import PageTitle from "../components/Proposal/PageTitle";
import axios from "axios";
import CommentToggle from "../components/Proposal/CommentToggle";

import { GetProposal } from "../api/proposal";
import http from "../common/http";

const Proposal = () => {
  // url에서 id 뽑기
  const navigate = useNavigate();
  const { id } = useParams();
  window.localStorage.setItem("order_id", id);

  const me = JSON.parse(localStorage.getItem("user")).email;
  const [writer, setWriter] = useState(null);

  const [commentId, setCommentId] = useState(null);
  const [recommentId, setRecommentId] = useState(null);
  // 대댓글 선택 여부
  const [reply, setReply] = useState(false);
  // 대댓글에 대댓글 선택 여부
  const [rereply, setReReply] = useState(false);

  // 댓글 정보 여기에 저장
  const [comments, setComments] = useState([]);

  let commentsLength = comments.length;

  for (let i = 0; i < comments.length; i++) {
    commentsLength += comments[i].recomments.length;
  }

  // 제안서 정보 받아 저장할 state
  const [option, setOption] = useState({
    date: "",
    size: "",
    taste: "",
    design: "",
    min: "",
    max: "",
    pickUp: "",
    image: "",
  });

  // 새로운 코멘트
  const [newComment, setNewComment] = useState("");

  // 제안서 수정하러 가기 버튼
  const EditProposal = () => {
    navigate("/edit/city");
  };

  // 제안서 Delete
  const DeleteProposal = async () => {
    const response = await http
      .delete(`/orders/${id}`)
      .then(function (response) {
        console.log("제안서 삭제", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 댓글/대댓글 Get api
  const getComment = async () => {
    const response = await http
      .get(`/orders/${id}/comments`)
      .then(response => {
        console.log("댓글 => ", response.data.commentDTOs);
        setComments(response.data.commentDTOs);
      })
      .catch(error => {
        console.log("실패", error);
      });
  };

  // 댓글 post api
  const postComment = async () => {
    const response = await http
      .post(`/orders/${id}/comments`, {
        contents: newComment,
      })
      .then(function (response) {
        console.log("댓글 작성 성공", response);
        //location.reload();
      })
      .catch(function (error) {
        console.log("댓글실패", error);
      });
  };

  // 대댓글 post api
  const postRecomment = async () => {
    const response = await http
      .post(`/orders/${id}/comments/${commentId}/recomments`, {
        contents: newComment,
      })
      .then(function (response) {
        console.log("대댓글 작성 성공", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 댓글 삭제
  const DeleteComment = async comment_id => {
    const response = await http
      .delete(`/orders/${id}/comments/${comment_id}`)
      .then(function (response) {
        console.log("댓글 삭제 성공", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 대댓글 삭제
  const DeleteReComment = async () => {
    const response = await http
      .delete(
        `/orders/${id}/comments/${comment_id}/recomments/${recomments_id}`,
      )
      .then(function (response) {
        console.log("대댓글 삭제 성공", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 댓글 작성 공통
  const onSubmit = e => {
    if (reply || rereply) {
      postRecomment();
    } else {
      postComment();
    }
    setNewComment("");
  };

  // 대댓글에 대댓글
  const getReCommentId = (comment, re) => {
    if (
      commentId === comment.comment.commentId &&
      recommentId === re.recommentId
    ) {
      setReReply(false);
      setCommentId(null);
      setRecommentId(null);
    } else {
      setReply(false);
      setReReply(true);
      setCommentId(comment.comment.commentId);
      setRecommentId(re.recommentId);
    }
  };

  // 댓글에 대댓글
  const getCommentId = comment => {
    console.log("댓글 선택", comment.comment.commentId);

    if (
      commentId == comment.comment.commentId &&
      recommentId == re.recommentId
    ) {
      setReply(false);
      setCommentId(null);
    } else {
      setReReply(false);
      setReply(true);
      setCommentId(comment.comment.commentId);
    }
  };

  useEffect(() => {
    http
      .get(`/orders/${id}`)
      .then(response => {
        const data = response.data;
        setWriter(data.member.email);
        console.log(data, "성공");
        setOption({
          date: data.createdAt.substr(0, 10),
          size: data.size,
          taste: data.flavor,
          design: data.description,
          min: data.priceMin,
          max: data.priceMax,
          pickUp: data.pickupDate.substr(0, 10),
          image: data.imageUrl,
        });
      })
      .catch(error => {
        console.log("제안서불러오기실패다", error);
      });

    // 댓글 불러오기
    http
      .get(`/orders/${id}/comments`)
      .then(response => {
        console.log("댓글 => ", response.data.commentDTOs);
        setComments(response.data.commentDTOs);
      })
      .catch(error => {
        console.log("댓글 실패", error);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <TopBar />
      <PageTitle margin="56px auto 0 auto" title="내 제안서"></PageTitle>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ImageBox src={option.image} />
      </div>

      <Text>레터링 케이크</Text>
      <PinkRectangle>
        <Option>
          <p className="option">작성일</p>
          <p className="content">{option.date}</p>
        </Option>
        <Option>
          <p className="option">사이즈</p>
          <p className="content">{option.size}</p>
        </Option>
        <Option>
          <p className="option">맛</p>
          <p className="content">{option.taste}</p>
        </Option>
        <Option>
          <p className="option">디자인</p>
          <p className="content">{option.design}</p>
        </Option>
        <Option>
          <p className="option">가격대</p>
          <p className="content">
            {option.min}만원 이상 {option.max}만원 미만
          </p>
        </Option>
        <Option>
          <p className="option">픽업 날짜</p>
          <p className="content">{option.pickUp}</p>
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
        {me === writer ? (
          <>
            <SmallPinkButton onClick={() => EditProposal()}>
              수정
            </SmallPinkButton>
            <SmallWhiteButton onClick={() => DeleteProposal()}>
              삭제
            </SmallWhiteButton>
          </>
        ) : (
          <></>
        )}
      </div>

      <Comment>댓글 {commentsLength}</Comment>

      <CommentSection>
        {comments.map(comment => {
          const recommentsList = comment.recomments.map(re => {
            return (
              <CommentPinkBox key={re.createdAt}>
                <img
                  src={CommentLogo}
                  style={{
                    marginRight: "12px",
                    width: "10px",
                    height: "10px",
                  }}
                />
                <div style={{ width: "100%" }}>
                  <CommentInfo>
                    <Nickname>{re.nickname}</Nickname>
                    <CommentTime>2022.05.10. 15:00</CommentTime>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      {me === re.writer.email ? (
                        <CommentToggle
                          onClick={() =>
                            DeleteComment(comment.comment.commentId)
                          }
                        >
                          삭제
                        </CommentToggle>
                      ) : (
                        <></>
                      )}

                      {commentId === comment.comment.commentId &&
                      recommentId === re.recommentId ? (
                        <CommentToggle
                          selected
                          onClick={() => getReCommentId(comment, re)}
                        >
                          답글
                        </CommentToggle>
                      ) : (
                        <CommentToggle
                          onClick={() => getReCommentId(comment, re)}
                        >
                          답글
                        </CommentToggle>
                      )}
                    </div>
                  </CommentInfo>

                  <CommentContent>{re.contents}</CommentContent>
                </div>
              </CommentPinkBox>
            );
          });
          return (
            <>
              <CommentYellowBox key={comment.comment.contents}>
                <CommentInfo>
                  <Nickname>{comment.comment.nickname}</Nickname>
                  <CommentTime>
                    {comment.comment.createdAt.substr(0, 10)}{" "}
                    {comment.comment.createdAt.substr(12, 4)}
                  </CommentTime>

                  <div style={{ display: "flex", marginLeft: "auto" }}>
                    {me === comment.comment.writer.email ? (
                      <CommentToggle
                        onClick={() => DeleteComment(comment.comment.commentId)}
                      >
                        삭제
                      </CommentToggle>
                    ) : (
                      <></>
                    )}

                    {commentId === comment.comment.commentId ? (
                      <CommentToggle
                        selected
                        onClick={() => getCommentId(comment)}
                      >
                        답글
                      </CommentToggle>
                    ) : (
                      <CommentToggle onClick={() => getCommentId(comment)}>
                        답글
                      </CommentToggle>
                    )}
                  </div>
                </CommentInfo>

                <CommentContent>{comment.comment.contents}</CommentContent>
              </CommentYellowBox>
              {recommentsList}
            </>
          );
        })}
      </CommentSection>

      <Input onSubmit={onSubmit}>
        <input
          placeholder="댓글을 입력해주세요."
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <button type="submit">등록</button>
      </Input>
    </div>
  );
};

export default Proposal;

const ImageBox = styled.img`
  margin: 37px auto 0 auto;

  height: 300px;

  border-radius: 6px;
`;

const Text = styled.p`
  margin: 30px auto 0px 30px;

  height: 33px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
`;

const PinkRectangle = styled.div`
  box-sizing: border-box;

  margin: 25px 24px 0px 24px;
  padding: 20px;

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

  height: 100px;

  background: var(--sub-yellow);

  padding: 24px;
`;

const CommentPinkBox = styled.div`
  display: flex;

  box-sizing: border-box;

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
  height: 70px;

  display: flex;
  justify-content: flex-end;

  background-color: var(--white);

  input {
    border: solid 2px var(--background);
    padding-left: 24px;

    background: transparent;

    color: var(--background);
    width: 100%;
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
