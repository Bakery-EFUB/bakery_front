import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

import SmallPinkButton from '../components/SmallPinkButton';
import SmallWhiteButton from '../components/SmallWhiteButton';

import PageTitle from '../components/PageTitle';

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
	margin: 20px auto 0 auto;
	background-color: var(--main-pink);
	border: none;
`;

const Wrapper = styled.div`
	width: 380px;
	height: auto;

	margin: 47px auto 0 auto;

	border: solid 1px var(--sub-pink);
	border-radius: 5px;

	grid-template-rows: repeat(2, 60px);

	.item:not(:last-child) {
		border-bottom: 1px solid var(--sub-pink);
	}
`;

const Circle = styled.div`
	width: 22px;
	height: 22px;
	border: 1px solid var(--main-pink);
	border-radius: 50%;

	background-color: ${props => (props.checked ? 'var(--main-pink)' : 'none')};

	margin: auto 0 auto 20px;
`;

const Option = styled.p`
	margin: auto 0 auto 23px;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;

	line-height: 14px;

	color: var(--black);
`;

const ProposalCake = () => {
	const [isChecked, setIsChecked] = useState(3);

	const [cakes, setCakes] = useState([
		{ id: 1, cake: '레터링 케이크' },
		{ id: 2, cake: '미니(도시락) 케이크' },
		{ id: 3, cake: '생화 케이크' },
		{ id: 4, cake: '플라워앙금 케이크' },
		{ id: 5, cake: '컵 케이크' },
		{ id: 6, cake: '기타 케이크' },
	]);

	const onToggle = id => {
		setIsChecked(id);
	};

	return (
		<div>
			<TopBar />
			<PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
			<ProgessBar />
			<Text>어떤 케이크를 원하시나요?</Text>

			<Wrapper>
				{cakes.map(cake => {
					if (cake.id === isChecked) {
						return (
							<div
								onClick={() => onToggle(cake.id)}
								className="item"
								key={cake.id}
								style={{
									display: 'flex',
									height: '60px',
								}}
							>
								<Circle checked />
								<Option>{cake.cake}</Option>
							</div>
						);
					} else {
						return (
							<div
								onClick={() => onToggle(cake.id)}
								className="item"
								key={cake.id}
								style={{
									display: 'flex',
									height: '60px',
								}}
							>
								<Circle />
								<Option>{cake.cake}</Option>
							</div>
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

export default ProposalCake;
