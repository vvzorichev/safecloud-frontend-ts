import React from 'react';
import { NavLink } from 'react-router-dom';

import { ISidebarItem } from "./interfaces/i-sidebar-item";

import './sidebar-item.css'

const SidebarItem: React.FC<ISidebarItem> = ({ value, section }) => {
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
