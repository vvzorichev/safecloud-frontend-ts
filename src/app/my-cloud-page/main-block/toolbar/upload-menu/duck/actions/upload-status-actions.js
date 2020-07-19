const onUploadStart = () => {
	return {
		type: 'UPLOAD_START'
	};
};

const onUploadFinish = () => {
	return {
		type: 'UPLOAD_FINISH'
	};
};

export {
	onUploadStart,
	onUploadFinish
};