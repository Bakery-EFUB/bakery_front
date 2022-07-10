import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

import SmallPinkButton from '../components/SmallPinkButton';
import SmallWhiteButton from '../components/SmallWhiteButton';

import PageTitle from '../components/PageTitle';
import CityButton from '../components/CityButton';
const Text = styled.p`
	font-family: 'Apple SD Gothic Neo';

	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 26px;
	text-align: center;

	width: 290px;
	height: 26px;

	margin: 44px auto 0 auto;
`;

const ProgessBar = styled.div`
	width: 380px;
	height: 4px;

	margin: 11px auto 0 auto;
	background-color: var(--main-pink);
	border: none;
`;

const SmallText = styled.p`
	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 26px;
	text-align: center;
	color: var(--sub-darkgray);
	margin: 0 auto 0 auto;
`;

const Wrapper = styled.div`
	width: 380px;
	height: 314px;
	margin: 32px auto 0 auto;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const cityArray = [
	{ city: '은평구', selected: true },
	{ city: '종로구', selected: false },
	{ city: '광진구', selected: false },
	{ city: '서대문구', selected: true },
	{ city: '강북구', selected: false },
	{ city: '중랑구', selected: false },
	{ city: '마포구', selected: false },
	{ city: '성북구', selected: false },
	{ city: '노원구', selected: false },
	{ city: '용산구', selected: true },
	{ city: '동대문구', selected: false },
	{ city: '도봉구', selected: false },
	{ city: '중구', selected: false },
	{ city: '성동구', selected: false },
];
const Proposal6 = () => {
	return (
		<div>
			<TopBar />
			<PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
			<ProgessBar />
			<Text>원하시는 지역을 선택해주세요</Text>
			<SmallText>(복수선택가능)</SmallText>

			<Wrapper>
				{cityArray.map(arr => {
					if (arr.selected === true) {
						console.log(arr.city, '참');
						return (
							<CityButton key={arr.city} selected>
								{arr.city}
							</CityButton>
						);
					} else {
						console.log(arr.city, '거짓');
						return <CityButton key={arr.city}>{arr.city}</CityButton>;
					}
				})}
			</Wrapper>

			<div
				style={{
					margin: '154px 24px auto 24px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<SmallWhiteButton>이전</SmallWhiteButton>
				<SmallPinkButton>다음</SmallPinkButton>
			</div>
		</div>
	);
};

export default Proposal6;
