const onLogin = () => {
	return {
		type: 'LOGIN'
	};
};

const onLogout = () => {
	return {
		type: 'LOGOUT'
	};
};

const onRegistration = () => {
	return {
		type: 'REGISTRATION'
	};
};

export {
	onLogin,
	onLogout,
	onRegistration
};