import fileListReducer from '../../my-cloud-page/main-block/file-list/duck/file-list-reducer';
import memoryReducer from '../../my-cloud-page/sidebar/memory/duck/memory-reducer'
import searchFieldReducer from '../../header/search-panel/duck/search-field-reducer';
import logStatusReducer from './log-status-reducer';
import uploadStatusReducer from '../../my-cloud-page/main-block/toolbar/upload-menu/duck/upload-status-reducer';
import folderStatusReducer from '../../my-cloud-page/main-block/duck/folder-status-reducer';

const updateState = (state: any, action: any) => {
	return {
		uploadStatus : uploadStatusReducer(state?.uploadStatus, action),
		fileList: fileListReducer(state?.fileList, action),
		memory: memoryReducer(state?.memory, action),
		searchField: searchFieldReducer(state?.searchField, action),
		folderStatus: folderStatusReducer(state?.folderStatus, action)
	};
};

const reducer = (state: any, action: any): any => {
	const logStatus = logStatusReducer(state?.logStatus, action);

	const otherStates = 
		logStatus.isLoggedIn ?
		updateState(state, action) :
		updateState(undefined, action);

	return {
		logStatus,
		...otherStates
	}
};

export default reducer;