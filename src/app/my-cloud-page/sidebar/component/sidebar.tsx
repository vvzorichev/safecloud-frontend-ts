import React from 'react';

import SidebarItem from '../sidebar-item';
import Memory from '../memory';

import './sidebar.css';

const Sidebar: React.FC = () => {
	return (
		<nav className="col-md-2 d-none d-md-block sidebar">
			<div className="sidebar-sticky">
				<ul className="nav flex-column">
					<SidebarItem value="Cloud Drive" section="drive" />
					<SidebarItem value="Folders" section="folders" />
					<SidebarItem value="Recents" section="recents" />
					<SidebarItem value="Tagged" section="tagged" />
				</ul>
				<Memory />
			</div>
		</nav>
	);
};

export default Sidebar;