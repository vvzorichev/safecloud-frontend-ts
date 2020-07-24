import { IAction, IUploadStatus, Types } from "./i-upload-status";

const initialState: IUploadStatus = {
	isUpload: false
};

const uploadStatusReducer = (state = initialState, action: IAction): IUploadStatus => {

	switch (action.type) {
		
		case Types.UPLOAD_START:
			return {
				isUpload: true
			};
		
		case Types.UPLOAD_FINISH:
			return {
				isUpload: false
			};

		default:
			return state;
	}
};

export default uploadStatusReducer;