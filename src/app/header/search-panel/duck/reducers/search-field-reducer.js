const searchFieldReducer = (state, action) => {
	
	if (state === undefined) {
		return {
			searchField: null
		};
	}

	const { type, payload } = action;

	switch (type) {

		case 'ON_SEARCH':
			return {
				searchField: payload
			};

		default:
			return state.searchField;
	}
};

export default searchFieldReducer;