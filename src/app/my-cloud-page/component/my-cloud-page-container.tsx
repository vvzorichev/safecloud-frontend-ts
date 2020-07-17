import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { ILogStatusState } from "../../duck/interfaces/i-log-status";

import MyCloudPage from './my-cloud-page';

const mapStateToProps =  ({ logStatus: { isLoggedIn } }: ILogStatusState) => {
	return { isLoggedIn	};
};

type IState = ReturnType<typeof mapStateToProps>;

const MyCloudPageContainer: React.FC<IState> = ({ isLoggedIn }) => {

	useEffect(() => {
		document.title = 'MyCloud - SafeCloud';
	});

	if (!isLoggedIn) {
		return <Redirect to="/login" />;
	}

	return <MyCloudPage />;
};

export default connect(mapStateToProps)(MyCloudPageContainer);