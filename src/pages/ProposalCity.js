import React, { useState } from 'react';
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
	font-weight: 500;
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

const Proposal6 = () => {
	const [cityArray, setCityArray] = useState([
		{ id: 1, city: '은평구', selected: true },
		{ id: 2, city: '종로구', selected: false },
		{ id: 3, city: '광진구', selected: false },
		{ id: 4, city: '서대문구', selected: true },
		{ id: 5, city: '강북구', selected: false },
		{ id: 6, city: '중랑구', selected: false },
		{ id: 7, city: '마포구', selected: false },
		{ id: 8, city: '성북구', selected: false },
		{ id: 9, city: '노원구', selected: false },
		{ id: 10, city: '용산구', selected: true },
		{ id: 11, city: '동대문구', selected: false },
		{ id: 12, city: '도봉구', selected: false },
		{ id: 13, city: '중구', selected: false },
		{ id: 14, city: '성동구', selected: false },
	]);

	const onToggle = id => {
		const selectedId = id;

		setCityArray(
			cityArray.map(city =>
				city.id === selectedId ? { ...city, selected: !city.selected } : city
			)
		);
	};

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
						return (
							<CityButton
								selected
								key={arr.id}
								id={arr.id}
								onClick={e => onToggle(e)}
							>
								{arr.city}
							</CityButton>
						);
					} else {
						return (
							<CityButton key={arr.id} id={arr.id} onClick={e => onToggle(e)}>
								{arr.city}
							</CityButton>
						);
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