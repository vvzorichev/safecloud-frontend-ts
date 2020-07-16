import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import MyCloudPage from './my-cloud-page.jsx';

const mapStateToProps =  ({ logStatus: { isLoggedIn } }) => {
	return { isLoggedIn	};
};

const MyCloudPageContainer = ({ isLoggedIn }) => {

	useEffect(() => {
		document.title = 'MyCloud - SafeCloud'
	});

	if (!isLoggedIn) {
		return <Redirect to="/login" />;
	}

	return <MyCloudPage />;
};

export default connect(mapStateToProps)(MyCloudPageContainer);