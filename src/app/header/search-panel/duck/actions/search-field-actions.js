const onSearch = (searchData) => {
	return {
		type: 'ON_SEARCH',
		payload: searchData
	};
};

export default onSearch;