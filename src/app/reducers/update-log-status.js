const updateLogStatus = (state, action) => {
	
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

export default updateLogStatus;