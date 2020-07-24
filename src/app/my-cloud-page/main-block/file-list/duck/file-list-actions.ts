import { IAction, IFileList, Types } from "./i-file-list";
import { Dispatch } from "redux";
import { IFileItem } from "../file-item/interfaces/i-file-item";

const filesRequested = (): IAction => {
	return {
		type: Types.FETCH_FILES_REQUEST,
		payload: {}
	};
};

const filesLoaded = (files: IFileList['files']): IAction => {
	return {
		type: Types.FETCH_FILES_SUCCESS,
		payload: { files }
	};
};

const filesError= (error: IFileList['error']): IAction => {
	return {
		type: Types.FETCH_FILES_FAILURE,
		payload: { error }
	};
};

const fetchFiles = (fileService: any) => () => (dispatch: Dispatch) => {
	dispatch(filesRequested());
	fileService.getFiles()
		.then((data: any) => dispatch(filesLoaded(data)))
		.catch((err: any) => dispatch(filesError(err)));
};

const changeFileTag = (id: IFileItem['id']): IAction => {
	return {
		type: Types.CHANGE_FILE_TAG,
		payload: { id }
	};
};

export {
	fetchFiles,
	changeFileTag
};