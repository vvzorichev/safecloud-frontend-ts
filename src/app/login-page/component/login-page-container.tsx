import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './login-page';
import ILogStatus from "../../interfaces/i-log-status";

interface INewLogStatus {
	logStatus: ILogStatus
}

const mapStateToProps =  ({ logStatus: { isLoggedIn } }: INewLogStatus) => {
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