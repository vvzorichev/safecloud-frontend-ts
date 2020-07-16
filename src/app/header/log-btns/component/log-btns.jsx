import React from 'react';

import LogBtn from '../log-btn';

import './log-btns.css';

const LogBtns = ({ isLoggedIn, isRegistered, onLogout, onRegistration }) => {
	const createAccount = isLoggedIn || isRegistered ||
		<LogBtn 
			to="/register" 
			value="Create Account" 
			onLog={onRegistration} />;

	const login = isLoggedIn || !isRegistered ||
		<LogBtn 
			to="/login" 
			value="Login" 
			onLog={onLogout} />;
	
	const logout = !isLoggedIn ||
		<LogBtn	
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