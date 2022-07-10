import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: white;
	border: 2px solid var(--main-pink);
	border-radius: 6px;

	width: 184px;
	height: 60px;

	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

	color: var(--main-pink);

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	text-transform: uppercase;
`;

const SmallWhiteButton = ({ children }) => {
	return <Button>{children}</Button>;
};

export default SmallWhiteButton;
