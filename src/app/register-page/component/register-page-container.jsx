import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import RegisterPage from './register-page.jsx';

const mapStateToProps =  ({ logStatus: { isLoggedIn } }) => {
	return { isLoggedIn	};
};

const RegisterPageContainer = ({ isLoggedIn }) => {

	useEffect(() => {
		document.title = 'Register - SafeCloud';
	});

	if (isLoggedIn) {
		return <Redirect to="/mycloud/drive" />;
	}

	return (
		<RegisterPage />
	)
};


export default connect(mapStateToProps)(RegisterPageContainer);