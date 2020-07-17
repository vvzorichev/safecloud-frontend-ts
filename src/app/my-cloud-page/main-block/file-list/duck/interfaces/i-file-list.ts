export interface IFileList {
    files: any[],
    loading: boolean,
    error: string | null
}

export interface IFileListState {
    fileList: IFileList
}