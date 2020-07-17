import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import RegisterPage from './register-page';
import {ILogStatusState} from "../../duck/interfaces/i-log-status";

const mapStateToProps =  ({ logStatus: { isLoggedIn } }: ILogStatusState) => {
	return { isLoggedIn	};
};

type IState = ReturnType<typeof mapStateToProps>

const RegisterPageContainer: React.FC<IState> = ({ isLoggedIn }) => {

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