export interface IFolderStatus {
    isOpen: boolean,
    path: number[]
}

export interface IFolderStatusState {
    folderStatus: IFolderStatus
}