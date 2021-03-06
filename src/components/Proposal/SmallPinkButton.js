import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: 184px;
	height: 60px;

	/* main pink */

	background: var(--main-pink);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

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

const SmallPinkButton = ({ children, onClick }) => {
	return <Button onClick={onClick}>{children}</Button>;
};

export default SmallPinkButton;
