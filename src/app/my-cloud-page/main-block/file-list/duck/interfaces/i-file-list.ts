import { IFileItem } from "../../file-item/interfaces/i-file-item";

export interface IFileList {
    files: IFileItem[],
    loading: boolean,
    error: string | null
}

export interface IFileListState {
    fileList: IFileList
}