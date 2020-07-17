import { IMemory } from "../interfaces/i-memory";

const memoryReducer = (state: any, action: any): IMemory => {

	if (state === undefined) {
		return {
			memory: null,
			loading: true,
			error: null
		};
	}

	const { type, payload } = action;

	switch (type) {

		case 'FETCH_MEMORY_REQUEST':
			return {
				memory: null,
				loading: true,
				error: null
			};

		case 'FETCH_MEMORY_SUCCESS':
			return {
				memory: payload,
				loading: false,
				error: null
			};
		
		case 'FETCH_MEMORY_FAILURE':
			console.log(payload)
			return {
				memory: null,
				loading: false,
				error: payload
			};

		default:
			return state.memory;
	}
};

export default memoryReducer;