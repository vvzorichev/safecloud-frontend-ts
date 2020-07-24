export interface IFileItem {
    id: string,
    name: string,
    size: string,
    type: string,
    dateAdded: string,
    isTagged: boolean
}

export interface IFileItemState {
    file: IFileItem
}