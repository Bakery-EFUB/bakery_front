import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

import DoneImage from '../images/DoneImage.svg';

import BigPinkButton from '../components/BigPinkButton';

const BigText = styled.p`
	position: absolute;
	left: 25.82%;
	right: 25.58%;
	top: 68.9%;
	bottom: 27.54%;

	/* title */

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 26px;
	text-align: center;

	/* black text */

	color: #202020;
`;

const SmallText = styled.p`
	position: absolute;
	left: 15.65%;
	right: 15.42%;
	top: 73.11%;
	bottom: 23.33%;

	/* sem16 */

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	text-align: center;

	/* black text */

	color: #202020;
`;

const Image = styled.div`
	background: url(${DoneImage});
	position: absolute;
	width: 379.07px;
	height: 388.06px;
	left: 34px;
	top: 197px;
`;

const UnderScoreText = styled.p`
	position: absolute;
	left: 15.65%;
	right: 15.42%;
	top: 92.01%;
	bottom: 4.43%;

	font-family: 'Apple SD Gothic Neo';
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

const ProposalDone = () => {
	return (
		<div>
			<TopBar />
			<Image />

			<BigText>제안서 작성하기 완료!</BigText>
			<SmallText>곧 있으면 사장님들이 연락을 드릴거에요</SmallText>
			<BigPinkButton>내 제안서 보러가기</BigPinkButton>

			<UnderScoreText>메인 홈으로 가기</UnderScoreText>
		</div>
	);
};

export default ProposalDone;
