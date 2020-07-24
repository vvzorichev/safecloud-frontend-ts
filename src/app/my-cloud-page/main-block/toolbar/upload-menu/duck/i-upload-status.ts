export interface IUploadStatus {
    isUpload: boolean
}

export interface IUploadStatusState {
    uploadStatus: IUploadStatus
}

export enum Types {
    UPLOAD_START = 'UPLOAD_START',
    UPLOAD_FINISH = 'UPLOAD_FINISH'
}

export interface IAction {
    type: Types
}