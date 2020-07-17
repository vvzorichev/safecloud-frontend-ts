import React from 'react';
import { Link } from 'react-router-dom';

import { IBtn } from "./interfaces/i-btn";

import './btn.css';

const Btn: React.FC<IBtn> = ({ value, to, onLog }) => {
	return (
		<Link className="LogBtn" to={to} onClick={onLog}>
			{value}
		</Link>
	);
};

export default Btn;