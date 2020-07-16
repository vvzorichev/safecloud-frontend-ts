import React from 'react';
import { Link } from 'react-router-dom';

import './btn.css';

const Btn = ({ value, to, onLog }) => {
	return (
		<Link className="log-btn" to={to} onClick={onLog}>
			{value}
		</Link>
	);
};

export default Btn;