import fileListReducer from '../../my-cloud-page/main-block/file-list/duck/reducers/file-list-reducer';
import memoryReducer from '../../my-cloud-page/sidebar/memory/duck/reducers'
import searchFieldReducer from '../../header/search-panel/duck/reducers';
import logStatusReducer from './log-status-reducer';
import updateUploadStatus from '../../my-cloud-page/main-block/toolbar/upload-menu/reducers';
import folderStatusReducer from '../../my-cloud-page/main-block/duck/reducers';

const updateState = (state, action) => {
	return {
		uploadStatus : updateUploadStatus(state, action),
		fileList: fileListReducer(state, action),
		memory: memoryReducer(state, action),
		searchField: searchFieldReducer(state, action),
		folderStatus: folderStatusReducer(state, action)
	};
};

const reducer = (state, action) => {
	const logStatus = logStatusReducer(state, action);

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