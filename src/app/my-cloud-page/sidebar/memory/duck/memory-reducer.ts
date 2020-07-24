import { IAction, IMemory, Types } from "./i-memory";

const initialState: IMemory = {
	memory: null,
	loading: true,
	error: null
};

const memoryReducer = (state = initialState, action: IAction): IMemory => {

	switch (action.type) {

		case Types.FETCH_MEMORY_REQUEST:
			return {
				memory: null,
				loading: true,
				error: null
			};

		case Types.FETCH_MEMORY_SUCCESS:
			return {
				memory: action.payload,
				loading: false,
				error: null
			};
		
		case Types.FETCH_MEMORY_FAILURE:
			return {
				memory: null,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default memoryReducer;