import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

import SmallWhiteButton from '../components/SmallWhiteButton';
import SmallGrayButton from '../components/SmallGrayButton';

import CustomCalendar from '../components/CustomCalendar';

const Text2 = styled.p`
	font-family: 'Apple SD Gothic Neo';

	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 26px;
	text-align: center;

	position: absolute;
	width: 290px;
	height: 26px;
	left: 68px;
	top: 264px;
`;

const ProgessBar = styled.div`
	width: 380px;
	height: 4px;

	position: absolute;

	left: 24px;
	top: 203px;

	background-color: var(--main-pink);
	border: none;
`;

const Button = styled.button`
	margin-top: 20px;

	position: absolute;
	width: 380px;
	height: 60px;
	left: 24px;
	top: 310px;

	background-color: var(--main-pink);
	border-radius: 6px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	border: none;

	color: var(--sub-yellow);

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */
	text-align: center;
	text-transform: uppercase;
`;

const ImageBox = styled.div`
	margin-top: 19px;
	position: absolute;
	width: 380px;
	height: 256px;
	left: 24px;
	top: 389px;

	/* background */

	background: var(--background);
	box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
	border-radius: 6px;
`;

const Proposal6 = () => {
	return (
		<div>
			<TopBar />
			{/* <Text1>제안서 작성하기</Text1> */}
			<ProgessBar />
			<Text2>픽업 날짜를 선택해주세요.</Text2>
			<CustomCalendar />
			<SmallWhiteButton>이전</SmallWhiteButton>
			<SmallGrayButton>완료</SmallGrayButton>
		</div>
	);
};

export default Proposal6;
