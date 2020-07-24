import React, { useCallback, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { withMemoryService } from '../../../common/hoc-helpers';
import { compose } from '../../../common/utils';
import fetchMemory from './duck/memory-actions';

import Spinner from '../../../common/spinner';
import ErrorIndicator from '../../../common/error-indicator';

import Memory from './memory';

import { IMemoryState } from "./duck/i-memory";

const mapStateToProps = ({ memory: { memory, loading, error } }: IMemoryState) => {
	return { memory, loading, error };
};

const mapDispatchToProps = (dispatch: Dispatch, { memoryService }: any) => {
	return bindActionCreators({
		fetchMemory: fetchMemory(memoryService)
	}, dispatch);
};

type IState = ReturnType<typeof mapStateToProps>;
type IDispatch = ReturnType<typeof mapDispatchToProps>;

const MemoryContainer: React.FC<IState & IDispatch> = ({ memory, loading, error, fetchMemory }) => {

	const updateMemory = useCallback(fetchMemory, []);

	useEffect(() => {
		updateMemory();
	}, [ updateMemory ]);

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <ErrorIndicator />;
	}

	return <Memory memory={memory} />;
};

export default compose(
	withMemoryService(),
	connect(mapStateToProps, mapDispatchToProps)
)(MemoryContainer);