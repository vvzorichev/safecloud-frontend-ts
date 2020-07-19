import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { onUploadFinish } from '../duck/actions';

import UploadFileForm from './upload-file-form.js';

import { IUploadStatusState } from "../duck/interfaces/i-upload-status";

const mapStateToProps =  ({ uploadStatus: { isUpload } }: IUploadStatusState) => {
	return { isUpload	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators({
		onUploadFinish
	}, dispatch);
};

type IState = ReturnType<typeof mapStateToProps>;
type IDispatch = ReturnType<typeof mapDispatchToProps>;

export type IProps = IState & IDispatch;

export default connect(mapStateToProps, mapDispatchToProps)(UploadFileForm);