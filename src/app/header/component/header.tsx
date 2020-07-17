import React from 'react';
import { Link } from 'react-router-dom';

import SearchPanel from '../search-panel';
import LogBtns from '../log-btns/component';

import './header.css';

const Header: React.FC = () => {
  return (
	<div className="Header">
		<Link className="Header-Link" to="/mycloud/drive">
			SafeCloud
		</Link>
		<SearchPanel />
		<LogBtns />
	</div>
  );
};

export default Header;