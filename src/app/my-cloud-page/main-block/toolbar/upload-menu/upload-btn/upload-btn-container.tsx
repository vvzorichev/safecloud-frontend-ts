import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { onUploadStart } from '../duck/actions';

import UploadBtn from './upload-btn';

import { IUploadStatusState } from "../duck/interfaces/i-upload-status";

const mapStateToProps =  ({ uploadStatus: { isUpload } }: IUploadStatusState) => {
	return { isUpload };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators({
		onUploadStart
	}, dispatch);
};

type IState = ReturnType<typeof mapStateToProps>;
type IDispatch = ReturnType<typeof mapDispatchToProps>;

export type IProps = IState & IDispatch;

export default connect(mapStateToProps, mapDispatchToProps)(UploadBtn);