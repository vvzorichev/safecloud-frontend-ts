import React, { ChangeEvent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from '../../common/utils';

import onSearch from './duck/search-field-actions';

import SearchPanel from './search-panel';
import { ILogStatusState } from "../../duck/i-log-status";

const mapStateToProps =  ({ logStatus: { isLoggedIn } }: ILogStatusState) => {
	return { isLoggedIn };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators({
		onSearch
	}, dispatch);
};

type IState = ReturnType<typeof mapStateToProps>;
type IDispatch = ReturnType<typeof mapDispatchToProps>;

type IProps = IState & IDispatch & RouteComponentProps;

const SearchPanelContainer: React.FC<IProps> = ({ isLoggedIn, onSearch, history }) => {
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (history.location.pathname !== '/mycloud/drive') {
			history.replace('/mycloud/drive');
		}
		onSearch(event.target.value);
	};

	if (!isLoggedIn) {
		return null;
	}
	
	return <SearchPanel onChange={handleChange}/>;
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(SearchPanelContainer);