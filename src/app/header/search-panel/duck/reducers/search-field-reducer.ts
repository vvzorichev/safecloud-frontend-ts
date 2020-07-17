import { ISearchField } from "../interfaces/i-search-field";

const searchFieldReducer = (state: any, action: any): ISearchField => {
	
	if (state === undefined) {
		return {
			searchString: null
		};
	}

	const { type, payload } = action;

	switch (type) {

		case 'ON_SEARCH':
			return {
				searchString: payload
			};

		default:
			return state.searchField;
	}
};

export default searchFieldReducer;