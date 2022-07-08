import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

import Rectangle147 from '../images/Rectangle147.svg';
import CommentLogo from '../images/CommentLogo.svg';

const Highlight = styled.p`
	margin: 0;
	position: absolute;
	width: 186px;
	height: 26px;
	left: 121px;
	top: 116px;

	/* title */

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 26px;
	text-align: center;
`;

const ImageBox = styled.img`
	margin: 0;
	position: absolute;
	width: 380px;
	height: 300px;
	left: 24px;
	top: 190px;

	background: url(${Rectangle147});
	border-radius: 6px;
`;

const Text = styled.p`
	margin: 0;
	position: absolute;
	width: 154.57px;
	height: 32.73px;
	left: 30px;
	top: 520px;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 34px;
`;

const PinkRectangle = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 20px;

	position: absolute;
	width: 380px;
	height: 320px;
	left: 24px;
	top: 580px;

	background: var(--sub-pink);
	border-radius: 6px;
`;

const Option = styled.div`
	display: flex;
	margin-bottom: 30px;

	.option {
		width: 99px;
		margin: 0;
		font-family: 'Apple SD Gothic Neo';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;

		color: var(--main-pink);
	}

	.content {
		margin: 0;

		font-family: 'Apple SD Gothic Neo';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;

		color: #202020;
	}
`;

const Comment = styled.p`
	position: absolute;

	height: 29px;
	left: 24px;
	top: 960px;

	margin: 0;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 29px;

	color: #202020;
`;

const CommentSection = styled.div`
	position: absolute;
	left: 0px;
	top: 996px;

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
	width: 83px;
	height: 22px;

	margin: 0;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;

	color: #202020;
`;

const CommentTime = styled.p`
	width: 94px;
	height: 14px;

	margin: 0;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 22px;

	color: #c4c4c4;
`;

const Delete = styled.p`
	width: 25px;
	height: 17px;

	margin: 0;
	margin-left: auto;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 22px;

	text-align: right;

	color: #949494;
`;

const CommentContent = styled.p`
	width: 315px;
	height: 17px;

	margin: 0;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;

	color: #202020;
`;
const Input = styled.form`
	position: fixed;
	bottom: 0;
	width: 100%;

	display: flex;
	justify-content: flex-end;

	width: 428px;
	height: 70px;
	background-color: #ffffff;

	input {
		border: solid 2px var(--background);
		padding-left: 24px;

		background: transparent;

		color: var(--background);
		width: 332px;
		height: 70px;

		font-family: 'Apple SD Gothic Neo';
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

		font-family: 'Apple SD Gothic Neo';
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;

		text-align: center;
		text-transform: uppercase;

		color: #ffffff;
	}
`;

const Proposal = () => {
	return (
		<div>
			<TopBar />
			<Highlight>dfsd님의 제안서</Highlight>
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

			<Comment>댓글 2</Comment>
			<CommentSection>
				<CommentYellowBox>
					<CommentInfo>
						<Nickname>터틀힙</Nickname>
						<CommentTime>2022.05.10. 15:00</CommentTime>
						<Delete>삭제</Delete>
					</CommentInfo>

					<CommentContent>
						안녕하세요~ 4월 5일 2시부터 8시 사이 픽업 가능합니다~
					</CommentContent>
				</CommentYellowBox>
				<CommentPinkBox>
					<CommentInfo>
						<img src={CommentLogo} style={{ marginRight: '12px' }} />
						<Nickname>작성자</Nickname>
						<CommentTime>2022.05.10. 15:00</CommentTime>
						<Delete>답글</Delete>
					</CommentInfo>
				</CommentPinkBox>
			</CommentSection>

			<Input>
				<input placeholder="댓글을 입력해주세요." /> <button>등록</button>
			</Input>
		</div>
	);
};

export default Proposal;
