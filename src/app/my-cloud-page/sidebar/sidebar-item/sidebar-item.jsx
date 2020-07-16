import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar-item.css'

const SidebarItem = ({ value, section }) => {
	return (
		<NavLink 
			className="nav-link"
			activeClassName="active" 
			to={section} >
			{value}
		</NavLink>
	)
};

export default SidebarItem;
