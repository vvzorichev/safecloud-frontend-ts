const changeFileTag= (id) => {
	return {
		type: 'CHANGE_FILE_TAG',
		payload: id
	};
};

export default changeFileTag;