import { ISearchField } from "../../../../../header/search-panel/duck/i-search-field";
import { IFileItem } from "../../file-item/interfaces/i-file-item";

export interface IFileListContainer extends ISearchField {
    files: IFileItem[],
    section: string,
}