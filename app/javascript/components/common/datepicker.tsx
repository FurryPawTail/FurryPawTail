import DatePicker from "tailwind-datepicker-react";
import React, { useState } from 'react';
const options = {
	title: "Birthday",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "red-500",
		disabledText: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date(),
	language: "en",
}

const DatePickerButton = ({ onChange }) => {
	const [show, setShow] = useState<boolean>(false)
	const handleChange = (selectedDate: Date) => {
    onChange(selectedDate);
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

	return (
		<div>
			<DatePicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}

export default DatePickerButton
