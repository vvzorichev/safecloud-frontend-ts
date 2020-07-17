import {bindActionCreators, Dispatch} from 'redux';
import { connect } from 'react-redux';

import { onLogout, onRegistration } from '../../../duck/actions';

import LogBtns from './log-btns';

import { ILogStatusState } from "../../../duck/interfaces/i-log-status";

const mapStateToProps =  ({ logStatus: { isLoggedIn, isRegistered } }: ILogStatusState) => {
	return { isLoggedIn, isRegistered };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators({
		onLogout,
		onRegistration
	}, dispatch);
};

export type IState = ReturnType<typeof mapStateToProps>;
export type IDispatch = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(LogBtns);