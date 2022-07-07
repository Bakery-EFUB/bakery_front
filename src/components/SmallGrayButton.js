import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	position: absolute;
	width: 184px;
	height: 60px;
	left: 220px;
	top: 806px;

	/* main pink */

	background: var(--background);

	border: none;
	border-radius: 6px;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */

	text-align: center;
	text-transform: uppercase;

	color: white;
`;

const SmallGrayButton = ({ children }) => {
	return <Button>{children}</Button>;
};

export default SmallGrayButton;
