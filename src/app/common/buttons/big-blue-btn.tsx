import React from 'react';
import { IBigBlueBtn } from "./interfaces/i-big-blue-btn";

import './big-blue-btn.css';

const BigBlueBtn: React.FC<IBigBlueBtn> = ({ value, onSendForm }) => {
	return (
		<button
			className="BigBlueBtn"
			type="submit"
			onClick={onSendForm}>
			{value}
		</button>
	);
};

export default BigBlueBtn;