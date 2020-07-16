import React from 'react';

const UploadFileForm = ({ onUploadFinish }) => {
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