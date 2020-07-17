import React, { useCallback, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import { connect } from 'react-redux';

import { withFileService } from '../../../../common/hoc-helpers';
import { compose } from '../../../../common/utils';
import { fetchFiles } from '../duck/actions';

import Spinner from '../../../../common/spinner';
import ErrorIndicator from '../../../../common/error-indicator';

import FileList from './file-list'

import { IFileListState } from "../duck/interfaces/i-file-list";
import {ISearchFieldState} from "../../../../header/search-panel/duck/interfaces/i-search-field";

const mapStateToProps = ({
	fileList: { files, loading, error },
	searchField: { searchString }
}: IFileListState & ISearchFieldState) => {
	return { files, loading, error, searchString };
};

const mapDispatchToProps = (dispatch: Dispatch, { fileService }: any) => {
	return bindActionCreators({
		fetchFiles: fetchFiles(fileService)
	}, dispatch);
};

type IState = ReturnType<typeof mapStateToProps>;
type IDispatch = ReturnType<typeof mapDispatchToProps>;

interface MatchParams {
	nav: string
}

type IProps = IState & IDispatch & RouteComponentProps<MatchParams>;

const FileListContainer: React.FC<IProps> = (
	{ loading, error, files, searchString, fetchFiles, match }) => {

	const updateFileList = useCallback(fetchFiles, []);

	useEffect(() => {
		updateFileList();
	}, [ updateFileList ]);
			
	const nav = match.params.nav || 'drive';

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <ErrorIndicator />;
	}

	return (
		<FileList
			files={files}
			section={nav}
			searchString={searchString} />
	);
};

export default compose(
	withFileService(),
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(FileListContainer);