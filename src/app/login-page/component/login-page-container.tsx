import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './login-page';

import { ILogStatusState } from "../../duck/i-log-status";

const mapStateToProps =  ({ logStatus: { isLoggedIn } }: ILogStatusState) => {
	return { isLoggedIn	};
};

type IStateProps = ReturnType<typeof mapStateToProps>;

const LoginPageContainer: React.FC<IStateProps> = ({ isLoggedIn }) => {

	useEffect(() => {
		document.title = 'Login - SafeCloud';
	});

	if (isLoggedIn) {
		return <Redirect to="/mycloud/drive" />;
	}

	return <LoginPage />;
};

export default connect(mapStateToProps)(LoginPageContainer);