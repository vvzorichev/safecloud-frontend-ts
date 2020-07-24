import { IAction, ILogStatus, Types } from "../i-log-status";

const initialState: ILogStatus = {
	isLoggedIn: false,
	isRegistered: false
};

const logStatusReducer = (state = initialState, action: IAction): ILogStatus => {

	switch (action.type) {

		case Types.LOGIN:
			return {
				isLoggedIn: true,
				isRegistered: false
			};

		case Types.LOGOUT:
			return {
				isLoggedIn: false,
				isRegistered: false
			};

		case Types.REGISTRATION:
			return {
				isLoggedIn: false,
				isRegistered: true
			};

		default:
			return state;
	}
};

export default logStatusReducer;