import React from 'react';
import styled from 'styled-components';

const CustomCalendar = styled.div`
	position: absolute;
	width: 379px;
	height: 384px;
	left: 25px;
	top: 317px;
`;

const Calendar = () => {
	return <CustomCalendar>캘린더</CustomCalendar>;
};

export default Calendar;
