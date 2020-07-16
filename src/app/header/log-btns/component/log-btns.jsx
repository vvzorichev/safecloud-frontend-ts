import React from 'react';

import Btn from '../btn';

import './log-btns.css';

const LogBtns = ({ isLoggedIn, isRegistered, onLogout, onRegistration }) => {
	const createAccount = isLoggedIn || isRegistered ||
		<Btn
			to="/register" 
			value="Create Account" 
			onLog={onRegistration} />;

	const login = isLoggedIn || !isRegistered ||
		<Btn
			to="/login" 
			value="Login" 
			onLog={onLogout} />;
	
	const logout = !isLoggedIn ||
		<Btn
			to="/login" 
			value="Logout" 
			onLog={onLogout} />;

  return (
		<div className="header-btns">
			{createAccount}
			{login}
			{logout}
		</div>
  );
};

export default LogBtns;