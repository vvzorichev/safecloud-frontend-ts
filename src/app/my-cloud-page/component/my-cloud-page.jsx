import React from 'react';

import Sidebar from '../sidebar/component';
import MainBlock from '../main-block/component';

const MyCloudPage = () => {
	return (
		<div className="container-fluid row">
			<Sidebar />
			<MainBlock />
		</div>
	);
};

export default MyCloudPage;