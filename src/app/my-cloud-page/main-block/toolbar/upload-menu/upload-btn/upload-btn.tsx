import React from 'react';

import { IProps } from "./upload-btn-container";



const UploadBtn: React.FC<IProps & {value: string}> = ({ value, onUploadStart, isUpload }) => {

	if (isUpload) {
		return null;
	}

	return (
		<button 
			className="btn btn-sm btn-secondary"
			onClick={onUploadStart}>
			{value}
		</button>
	);
};

export default UploadBtn;