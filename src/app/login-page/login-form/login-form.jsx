import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onLogin } from '../../actions';

import { BigBlueBtn } from '../../common/buttons';
import Checkbox from '../../common/checkbox';

import './login-form.css';

const LoginForm = ({ onLogin  }) => {
	return (
		<form className="login-form">
			<input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
			<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
			<Checkbox value="Remember me" />
			<BigBlueBtn value='Log in' onSendForm={onLogin} />
		</form>
	);
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onLogin
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);