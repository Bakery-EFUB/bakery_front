import React, { useState } from 'react';
import styled from 'styled-components';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPosition = styled.div`
	position: absolute;
	width: 379px;
	height: 384px;
	left: 25px;
	top: 317px;
`;

const CustomCalendar = () => {
	const [value, onChange] = useState(new Date());

	return (
		<CalendarPosition>
			<Calendar onChange={onChange} value={value}></Calendar>
		</CalendarPosition>
	);
};

export default CustomCalendar;
