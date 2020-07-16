import React from 'react';
import { Link } from 'react-router-dom';

import './log-btn.css';

const LogBtn = ({ value, to, onLog }) => {
	return (
		<Link className="log-btn" to={to} onClick={onLog}>
			{value}
		</Link>
	);
};

export default LogBtn;