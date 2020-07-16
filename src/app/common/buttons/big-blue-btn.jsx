import React from 'react';

const BigBlueBtn = ({ value, onSendForm }) => {
	return (
		<button 
			className="btn btn-lg btn-primary btn-block" 
			type="submit"
			onClick={onSendForm}>
			{value}
		</button>
	);
};

export default BigBlueBtn;