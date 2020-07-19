import React from 'react';

import { IProps } from "./upload-file-form-container";

const UploadFileForm: React.FC<IProps> = ({ isUpload, onUploadFinish }) => {

	if (!isUpload) {
		return null;
	}

	return (
		<form>
			<input type="file"/>
			<button 
				type="submit" 
				className="btn btn-sm btn-secondary"
				onClick={onUploadFinish}>
				Upload
			</button>
		</form>
	);
};

export default UploadFileForm;