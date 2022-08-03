import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: 184px;
	height: 60px;

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

const SmallGrayButton = ({ children, onClick }) => {
	return <Button onClick={onClick}>{children}</Button>;
};

export default SmallGrayButton;
