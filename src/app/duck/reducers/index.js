import updateFileList from '../my-cloud-page/main-block/file-list/duck/reducers/update-file-list';
import updateMemory from './update-memory';
import updateSearchField from '../header/search-panel/reducers';
import updateLogStatus from './update-log-status';
import updateUploadStatus from '../my-cloud-page/main-block/toolbar/upload-menu/reducers';
import updateFolderStatus from '../my-cloud-page/main-block/reducers';

const updateState = (state, action) => {
	return {
		uploadStatus : updateUploadStatus(state, action),
		fileList: updateFileList(state, action),
		memory: updateMemory(state, action),
		searchField: updateSearchField(state, action),
		folderStatus: updateFolderStatus(state, action)
	};
};

const reducer = (state, action) => {
	const logStatus = updateLogStatus(state, action);

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