import React from 'react';

import { BigBlueBtn } from '../../common/buttons';
import Checkbox from '../../common/checkbox';

import './register-form.css';

const RegisterForm: React.FC = ({ onCreate = null  }: any) => {
	return (
		<form className="register-form">
			<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
			<input type="password" id="inputPassword" className="form-control center" placeholder="Password" required />
			<input type="password" id="retypePassword" className="form-control" placeholder="Retype password" required />
			<Checkbox value="I understand that if I lose my password, I may lose my data." />
			<BigBlueBtn value="Create Account" onSendForm={onCreate} />
		</form>
	);
};

export default RegisterForm;