import React from 'react';

const UploadBtn = ({ value, onUploadStart }) => {
	return (
		<button 
			className="btn btn-sm btn-secondary"
			onClick={onUploadStart}>
			{value}
		</button>
	);
};

export default UploadBtn;