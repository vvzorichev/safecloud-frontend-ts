const updateUploadStatus = (state, action) => {
	
	if (state === undefined) {
		return {
			isUpload: false
		};
	}

	switch (action.type) {
		
		case 'UPLOAD_START':
			return {
				isUpload: true
			};
		
		case 'UPLOAD_FINISH':
			return {
				isUpload: false
			};

		default:
			return state.uploadStatus;
	}
};

export default updateUploadStatus;