import React from 'react';

import LoginForm from '../login-form';

import './login-page.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
		<h1 className="lp-header">Login</h1>
		<LoginForm />
		<p className="lp-p">&copy; SafeCloud 2020</p>
	</div>
  );
};

export default LoginPage;