import { IAction, IFolderStatus, Types } from './i-folder-state';

const initialState: IFolderStatus = {
	isOpen: false,
	path: []
};

const folderStatusReducer = (state = initialState, action: IAction): IFolderStatus => {

	switch (action.type) {

		case Types.OPEN:
			return {
				isOpen: true,
				path: [...state.path, action.payload]
			};

		case Types.CLOSE:
			return {
				isOpen: false,
				path: []
			};

		default:
			return state;
	}
};

export default folderStatusReducer;