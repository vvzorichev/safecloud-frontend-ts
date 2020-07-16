import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './login-page.jsx';

const mapStateToProps =  ({ logStatus: { isLoggedIn } }) => {
	return { isLoggedIn	};
};

const LoginPageContainer = ({ isLoggedIn }) => {

	useEffect(() => {
		document.title = 'Login - SafeCloud'
	});

	if (isLoggedIn) {
		return <Redirect to="/mycloud/drive" />;
	}

  return (
    <LoginPage />
  );
};

export default connect(mapStateToProps)(LoginPageContainer);