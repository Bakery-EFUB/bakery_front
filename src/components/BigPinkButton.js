import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	position: absolute;
	width: 380px;
	height: 60px;
	left: 24px;
	top: 778px;

	/* main pink */

	background: var(--main-pink);

	border: none;
	border-radius: 6px;

	box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);

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

const BigPinkButton = ({ children }) => {
	return <Button>{children}</Button>;
};

export default BigPinkButton;
