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
	width: 75px;
	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;

	line-height: 14px;

	color: var(--black);
`;

const Exp = styled.p`
	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 32px;
	/* identical to box height */

	color: var(--sub-darkgray);
`;

const ProposalSize = () => {
	const [isChecked, setIsChecked] = useState(3);

	const [sizes, setSizes] = useState([
		{ id: 1, size: '미니', exp: '지름 11cm, 1~2인분' },
		{ id: 2, size: '1호', exp: '지름 15cm, 2~4인분' },
		{ id: 3, size: '2호', exp: '지름 13cm, 4~6인분' },
		{ id: 4, size: '3호', exp: '지름 21cm, 6~8인분' },
		{ id: 5, size: '3호 이상', exp: '' },
		{ id: 6, size: '컵케이크', exp: '' },
	]);

	const onToggle = id => {
		setIsChecked(id);
	};

	return (
		<div>
			<TopBar />
			<PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />
			<ProgessBar />
			<Text>케이크 사이즈를 선택해주세요.</Text>

			<Wrapper>
				{sizes.map(size => {
					if (size.id === isChecked) {
						return (
							<div
								onClick={() => onToggle(size.id)}
								className="item"
								key={size.id}
								style={{
									display: 'flex',
									height: '60px',
								}}
							>
								<Circle checked />
								<Option>{size.size}</Option>
								<Exp>{size.exp}</Exp>
							</div>
						);
					} else {
						return (
							<div
								onClick={() => onToggle(size.id)}
								className="item"
								key={size.id}
								style={{
									display: 'flex',
									height: '60px',
								}}
							>
								<Circle />
								<Option>{size.size}</Option>
								<Exp>{size.exp}</Exp>
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

export default ProposalSize;
