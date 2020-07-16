import React from 'react';
import { Link } from 'react-router-dom';

import SearchPanel from '../search-panel';
import LogBtns from '../log-btns/component';

import './header.css';

const Header = () => {
  return (
	<div className="header-head">
		<Link className="header-link" to="/mycloud/drive">
			SafeCloud
		</Link>
		<SearchPanel />
		<LogBtns />
	</div>
  );
};

export default Header;