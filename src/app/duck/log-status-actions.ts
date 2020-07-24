import { IAction, Types } from "./i-log-status";

const onLogin = (): IAction => {
	return {
		type: Types.LOGIN
	};
};

const onLogout = (): IAction => {
	return {
		type: Types.LOGOUT
	};
};

const onRegistration = (): IAction => {
	return {
		type: Types.REGISTRATION
	};
};

export {
	onLogin,
	onLogout,
	onRegistration
};