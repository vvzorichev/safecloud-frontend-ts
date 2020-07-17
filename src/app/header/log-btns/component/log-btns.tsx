import React from 'react';

import { IState, IDispatch } from "./log-btns-container";

import Btn from '../btn';

import './log-btns.css';

const LogBtns: React.FC<IState & IDispatch> = ({ isLoggedIn, isRegistered, onLogout, onRegistration }) => {
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
		<div className="Header-Btns">
			{createAccount}
			{login}
			{logout}
		</div>
  );
};

export default LogBtns;