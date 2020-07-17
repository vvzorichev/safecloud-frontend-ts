import React from 'react';

import { IDispatchProps } from "./login-form-container";

import { BigBlueBtn } from '../../common/buttons';
import Checkbox from '../../common/checkbox';

import './login-form.css';

const LoginForm: React.FC<IDispatchProps> = ({ onLogin  }) => {
	return (
		<form className="login-form">
			<input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
			<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
			<Checkbox value="Remember me" />
			<BigBlueBtn value='Log in' onSendForm={onLogin} />
		</form>
	);
};

export default LoginForm;