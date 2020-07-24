import { IFileItem } from "../file-item/interfaces/i-file-item";
import { IAction, IFileList, Types } from "./i-file-list";

const updateFile = (file: IFileItem): IFileItem => {
	return {
		...file,
		isTagged: !file.isTagged
	};
};

const changeTag = (files: IFileList['files'], fileId: IFileItem["id"] | undefined): IFileItem[] => {
	const fileIndex = files.findIndex(({ id }) => id === fileId);
	const newFile = updateFile(files[fileIndex]);

	return [
		...files.slice(0, fileIndex),
		newFile,
		...files.slice(fileIndex + 1)
	];
};

const initialState: IFileList = {
	files: [],
	loading: true,
	error: null
};

const fileListReducer = (state = initialState, action: IAction): IFileList => {

	switch (action.type) {

		case Types.FETCH_FILES_REQUEST:
			return {
				files: [],
				loading: true,
				error: null
			};

		case Types.FETCH_FILES_SUCCESS:
			return {
				files: action.payload.files || [],
				loading: false,
				error: null
			};

		case Types.FETCH_FILES_FAILURE:
			return {
				files: [],
				loading: false,
				error: action.payload.error || null
			};

		case Types.CHANGE_FILE_TAG:
			return {
				files: changeTag(state.files, action.payload.id),
				loading: false,
				error: null
			};

		default:
			return state;
	}
};

export default fileListReducer;