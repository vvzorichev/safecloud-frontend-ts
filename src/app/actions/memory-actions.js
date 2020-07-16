const memoryRequested = () => {
	return {
		type: 'FETCH_MEMORY_REQUEST'
	};
};

const memoryLoaded = (memory) => {
	return {
		type: 'FETCH_MEMORY_SUCCESS',
		payload: memory
	};
};

const memoryError= (error) => {
	return {
		type: 'FETCH_MEMORY_FAILURE',
		payload: error
	};
};

const fetchMemory = (memoryService) => () => (dispatch) => {
	dispatch(memoryRequested());
	memoryService.getMemory()
		.then((data) => dispatch(memoryLoaded(data)))
		.catch((err) => dispatch(memoryError(err)));
}; 

export default fetchMemory;