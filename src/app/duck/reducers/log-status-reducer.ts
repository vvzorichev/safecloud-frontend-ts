import { ILogStatus } from "../interfaces/i-log-status";

const initialState: ILogStatus = {
	isLoggedIn: false,
	isRegistered: false
};

const logStatusReducer = (state = initialState, action: any): ILogStatus => {

	switch (action.type) {

		case 'LOGIN':
			return {
				isLoggedIn: true,
				isRegistered: false
			};

		case 'LOGOUT':
			return {
				isLoggedIn: false,
				isRegistered: false
			};

		case 'REGISTRATION':
			return {
				isLoggedIn: false,
				isRegistered: true
			};

		default:
			return state;
	}
};

export default logStatusReducer;