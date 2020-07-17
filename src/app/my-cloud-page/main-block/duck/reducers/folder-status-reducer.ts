import { IFolderStatus } from '../interfaces/i-folder-status';

const folderStatusReducer = (state: any, action: any): IFolderStatus => {
	if (state === undefined) {
		
		return {
			isOpen: false,
			path: []
		};
	}

	switch (action.type) {

		case 'OPEN':
			return {
				isOpen: true,
				path: [...state.folderStatus.path, action.payload]
			};

		case 'CLOSE':
			return {
				isOpen: false,
				path: []
			};

		default:
			return state.folderStatus;
	}
};

export default folderStatusReducer;