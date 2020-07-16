import React from 'react';

import UploadMenu from '../upload-menu/component';
import PathToFile from '../path-to-file';

const Toolbar = () => {
	return (
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
			<PathToFile />
			<UploadMenu />
		</div>
	);
};

export default Toolbar;