import React from 'react';

import UploadBtn from '../upload-btn';
import UploadFileForm from '../upload-file-forms';

const UploadMenu = () => {
	return (
		<div className="btn-toolbar form-toolbar mb-2 mb-md-0">
			<div className="btn-group mr-2">
				<UploadBtn value="New Folder" />
				<UploadBtn value="File Upload" />
				<UploadBtn value="Folder Upload" />
				<UploadFileForm />
			</div>
		</div>
	);
};

export default UploadMenu;