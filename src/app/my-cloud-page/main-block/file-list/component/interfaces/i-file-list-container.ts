import { ISearchField } from "../../../../../header/search-panel/duck/interfaces/i-search-field";

export interface IFileListContainer extends ISearchField {
    files: any[],
    section: string,
}