import {bindActionCreators, Dispatch} from 'redux';
import { connect } from 'react-redux';

import { onLogin } from '../../duck/log-status-actions';

import LoginForm from "./login-form";

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        onLogin
    }, dispatch);
};

export type IDispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(null, mapDispatchToProps)(LoginForm);