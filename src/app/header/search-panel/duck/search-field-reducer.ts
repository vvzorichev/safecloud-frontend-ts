import { IAction, ISearchField, Types } from "./i-search-field";

const initialState: ISearchField = {
	searchString: null
};

const searchFieldReducer = (state = initialState, action: IAction): ISearchField => {

	switch (action.type) {

		case Types.ON_SEARCH:
			return {
				searchString: action.payload
			};

		default:
			return state;
	}
};

export default searchFieldReducer;