import React from 'react';

import RegisterForm  from '../register-form';

import './register-page.css';

const RegisterPage: React.FC = () => {
  return (
    <div className="RegisterPage">
			<h1 className="RegisterPage-Header">Create your account</h1>
			<RegisterForm />
			<p className="RegisterPage-Footer">&copy; SafeCloud 2020</p>
		</div>
  );
};

export default RegisterPage;