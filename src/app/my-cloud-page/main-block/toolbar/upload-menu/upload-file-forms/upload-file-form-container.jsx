import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onUploadFinish } from '../actions';

import UploadFileForm from './upload-file-form.jsx';

const mapStateToProps =  ({ uploadStatus: { isUpload } }) => {
	return { isUpload	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onUploadFinish
	}, dispatch);
};

const UploadFileFormContainer = ({ onUploadFinish, isUpload }) => {
	if (!isUpload) {
		return null;
	}
	return <UploadFileForm onUploadFinish={onUploadFinish} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadFileFormContainer);