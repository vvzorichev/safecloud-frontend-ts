import React from 'react';

import Sidebar from '../sidebar/component';
import MainBlock from '../main-block/component';

const MyCloudPage: React.FC = () => {
	return (
		<div className="container-fluid row">
			<Sidebar />
			<MainBlock />
		</div>
	);
};

export default MyCloudPage;