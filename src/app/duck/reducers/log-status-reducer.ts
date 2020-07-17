import { ILogStatus } from "../interfaces/i-log-status";

const logStatusReducer = (state: any, action: any): ILogStatus => {
	
	if (state === undefined) {
		return {
			isLoggedIn: false,
			isRegistered: false
		};
	}

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
			return state.logStatus;
	}
};

export default logStatusReducer;