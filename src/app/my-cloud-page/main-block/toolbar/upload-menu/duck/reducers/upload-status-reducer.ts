import { IUploadStatus } from "../interfaces/i-upload-status";

const uploadStatusReducer = (state: any, action: any): IUploadStatus => {
	
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

export default uploadStatusReducer;