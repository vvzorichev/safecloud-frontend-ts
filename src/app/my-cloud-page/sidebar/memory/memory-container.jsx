import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withMemoryService } from '../../../common/hoc-helpers';
import { compose } from '../../../../utils';
import { fetchMemory } from '../../../actions';

import Spinner from '../../../common/spinner';
import ErrorIndicator from '../../../common/error-indicator';

import Memory from './memory.jsx';

class MemoryContainer extends Component {

	componentDidMount() {
		this.props.fetchMemory();
	}

	render() {
		const { memory, loading, error } = this.props;

		if (loading) {
			return <Memory memory={<Spinner />} />;
		}

		if (error) {
			return <Memory memory={<ErrorIndicator />} />;
		}

		return <Memory memory={memory} />;
	}
}; 

const mapStateToProps = ({ memory: { memory, loading, error } }) => {
	return { memory, loading, error };
};

const mapDispatchToProps = (dispatch, { memoryService }) => {
	return bindActionCreators({
		fetchMemory: fetchMemory(memoryService)
	}, dispatch);
};

export default compose(
	withMemoryService(),
	connect(mapStateToProps, mapDispatchToProps)
)(MemoryContainer);