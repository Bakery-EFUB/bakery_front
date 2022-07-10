import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
	width: 120px;
	height: 50px;

	border-radius: 25px;

	background: none;

	font-family: 'Apple SD Gothic Neo';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	text-transform: uppercase;

	${props =>
		props.selected
			? css`
					color: white;
					border: none;
					background-color: var(--main-pink);
					font-weight: 500;
			  `
			: css`
					color: var(--sub-darkgray);
					border: 2px solid var(--sub-darkgray);
			  `}
`;

const CityButton = ({ children, ...props }) => {
	return <Button {...props}>{children}</Button>;
};

export default CityButton;
