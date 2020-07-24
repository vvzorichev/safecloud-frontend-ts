import { Types, IAction, ISearchField } from "./i-search-field";

const onSearch = (searchData: ISearchField["searchString"]): IAction => {
	return {
		type: Types.ON_SEARCH,
		payload: searchData
	};
};

export default onSearch;