import fileListReducer from '../../my-cloud-page/main-block/file-list/duck/reducers/file-list-reducer';
import memoryReducer from '../../my-cloud-page/sidebar/memory/duck/reducers'
import searchFieldReducer from '../../header/search-panel/duck/reducers';
import logStatusReducer from './log-status-reducer';
import uploadStatusReducer from '../../my-cloud-page/main-block/toolbar/upload-menu/duck/reducers';
import folderStatusReducer from '../../my-cloud-page/main-block/duck/reducers';

import { IStore } from "../interfaces/i-store";

const updateState = (state: IStore | undefined, action: any) => {
	return {
		uploadStatus : uploadStatusReducer(state, action),
		fileList: fileListReducer(state, action),
		memory: memoryReducer(state, action),
		searchField: searchFieldReducer(state, action),
		folderStatus: folderStatusReducer(state, action)
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