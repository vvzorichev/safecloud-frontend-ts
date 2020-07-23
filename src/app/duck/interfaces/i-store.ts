import { ILogStatusState } from "./i-log-status";
import { IUploadStatusState } from "../../my-cloud-page/main-block/toolbar/upload-menu/duck/interfaces/i-upload-status";
import { IFileListState } from "../../my-cloud-page/main-block/file-list/duck/interfaces/i-file-list";
import { IMemoryState } from "../../my-cloud-page/sidebar/memory/duck/interfaces/i-memory";
import { ISearchFieldState } from "../../header/search-panel/duck/interfaces/i-search-field";
import { IFolderStatusState } from "../../my-cloud-page/main-block/duck/interfaces/i-folder-status";

export interface IStore extends
    ILogStatusState,
    IUploadStatusState,
    IFileListState,
    IMemoryState,
    ISearchFieldState,
    IFolderStatusState
{}
