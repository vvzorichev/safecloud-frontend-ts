import { IFileItem } from "../../file-item/interfaces/i-file-item";
import {IFileList} from "../interfaces/i-file-list";

const updateFile = (file: IFileItem): IFileItem => {
	return {
		...file,
		isTagged: !file.isTagged
	};
};

const changeTag = (fileList: IFileItem[], fileId: IFileItem["id"]): IFileItem[] => {
	const fileIndex = fileList.findIndex(({ id }) => id === fileId);
	const newFile = updateFile(fileList[fileIndex]);

	return [
		...fileList.slice(0, fileIndex),
		newFile,
		...fileList.slice(fileIndex + 1)
	];
};

const fileListReducer = (state: any, action: any): IFileList => {

	if (state === undefined) {
		return {
			files: [],
			loading: true,
			error: null
		};
	}

	const { type, payload } = action;

	switch (type) {

		case 'FETCH_FILES_REQUEST':
			return {
				files: [],
				loading: true,
				error: null
			};

		case 'FETCH_FILES_SUCCESS':
			return {
				files: payload,
				loading: false,
				error: null
			};
		
		case 'FETCH_FILES_FAILURE':
			return {
				files: [],
				loading: false,
				error: payload
			};

		case 'CHANGE_FILE_TAG':
			return {
				files: changeTag(state.fileList.files, payload),
				loading: false,
				error: null
			};

		default:
			return state.fileList;
	}
};

export default fileListReducer;