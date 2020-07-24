export interface IFolderStatus {
    isOpen: boolean,
    path: string[]
}

export interface IFolderStatusState {
    folderStatus: IFolderStatus
}

export enum Types {
    OPEN = 'OPEN',
    CLOSE = 'CLOSE'
}

export interface IAction {
    type: Types,
    payload: string
}