import { IFileItem } from "../file-item/interfaces/i-file-item";

export interface IFileList {
    files: IFileItem[],
    loading: boolean,
    error: string | null
}

export interface IFileListState {
    fileList: IFileList
}

export enum Types {
    FETCH_FILES_REQUEST = 'FETCH_FILES_REQUEST',
    FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS',
    FETCH_FILES_FAILURE = 'FETCH_FILES_FAILURE',
    CHANGE_FILE_TAG = 'CHANGE_FILE_TAG'
}

export interface IAction {
    type: Types,
    payload: {
        files?: IFileList['files'],
        error?: IFileList['error'],
        id?: IFileItem['id']
    }
}