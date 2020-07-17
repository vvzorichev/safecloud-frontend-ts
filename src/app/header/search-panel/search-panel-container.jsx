import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from '../../common/utils';

import onSearch from './duck/actions';

import SearchPanel from './search-panel.jsx';

const mapStateToProps =  ({ logStatus: { isLoggedIn } }) => {
	return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onSearch
	}, dispatch);
};

const SearchPanelContainer = ({ isLoggedIn, onSearch, history }) => {
	
	const handleChange = (event) => {
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