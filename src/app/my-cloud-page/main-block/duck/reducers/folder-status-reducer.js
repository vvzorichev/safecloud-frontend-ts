const updateFolderStatus = (state, action) => {
	if (state === undefined) {
		
		return {
			isOpen: false,
			path: [],
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

export default updateFolderStatus;