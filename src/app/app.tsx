import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './header/component';
import MyCloudPage from './my-cloud-page/component';
import LoginPage from './login-page/component';
import RegisterPage from './register-page/component';

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route
					path="/mycloud/:nav?" 
					component={MyCloudPage} />
				<Route 
					exact
					path="/login" 
					component={LoginPage} />
				<Route 
					exact
					path="/register"
					component={RegisterPage} />
				<Redirect to="/mycloud/drive" />
			</Switch>
		</Router>
	);
};

export default App;