import { IAction, Types } from "./i-upload-status";

const onUploadStart = (): IAction => {
	return {
		type: Types.UPLOAD_START
	};
};

const onUploadFinish = (): IAction => {
	return {
		type: Types.UPLOAD_FINISH
	};
};

export {
	onUploadStart,
	onUploadFinish
};