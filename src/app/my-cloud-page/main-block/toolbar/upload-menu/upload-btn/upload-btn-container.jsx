import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onUploadStart } from '../actions';

import UploadBtn from './upload-btn.jsx';

const mapStateToProps =  ({ uploadStatus: { isUpload } }) => {
	return { isUpload	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onUploadStart
	}, dispatch);
};

const UploadBtnContainer = ({ value, onUploadStart, isUpload }) => {
	if (isUpload) {
		return null;
	}
	return <UploadBtn onUploadStart={onUploadStart} value={value} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadBtnContainer);