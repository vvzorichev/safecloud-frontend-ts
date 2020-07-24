import { IAction, IMemory, Types } from "./i-memory";
import { Dispatch } from "redux";

const memoryRequested = (): IAction => {
	return {
		type: Types.FETCH_MEMORY_REQUEST
	};
};

const memoryLoaded = (memory: IMemory["memory"]): IAction => {
	return {
		type: Types.FETCH_MEMORY_SUCCESS,
		payload: memory
	};
};

const memoryError= (error: IMemory["error"]): IAction => {
	return {
		type: Types.FETCH_MEMORY_FAILURE,
		payload: error
	};
};

const fetchMemory = (memoryService: any) => () => (dispatch: Dispatch) => {
	dispatch(memoryRequested());
	memoryService.getMemory()
		.then((data: any) => dispatch(memoryLoaded(data)))
		.catch((err: any) => dispatch(memoryError(err)));
}; 

export default fetchMemory;