import React from 'react';

import LoginForm from '../login-form';

import './login-page.css';

const LoginPage: React.FC = () => {
  return (
    <div className="LoginPage">
		<h1 className="LoginPage-Header">Login</h1>
		<LoginForm />
		<p className="LoginPage-Footer">&copy; SafeCloud 2020</p>
	</div>
  );
};

export default LoginPage;