import React from 'react';

import RegisterForm  from '../register-form';

import './register-page.css';

const RegisterPage = () => {
  return (
    <div className="register-page">
			<h1 className="rp-header">
				Create your account
			</h1>
			<RegisterForm />
			<p className="rp-p">
				&copy; SafeCloud 2020
			</p>
		</div>
  );
};

export default RegisterPage;