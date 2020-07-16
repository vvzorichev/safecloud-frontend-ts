import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withFileService } from '../../../../common/hoc-helpers';
import { compose } from '../../../../common/utils';
import { fetchFiles } from '../duck/actions';

import Spinner from '../../../../common/spinner';
import ErrorIndicator from '../../../../common/error-indicator';

import FileList from './file-list.jsx'

const mapStateToProps = ({
	fileList: { files, loading, error }, 
	searchField: { searchField } 
}) => {
	return { files, loading, error, searchField };
};

const mapDispatchToProps = (dispatch, { fileService }) => {
	return bindActionCreators({
		fetchFiles: fetchFiles(fileService)
	}, dispatch);
};

class FileListContainer extends Component {
	componentDidMount() {
		this.props.fetchFiles();		
	}
	
	render() {
		
		const { 
			loading, 
			error, 
			files, 
			match, 
			searchField } = this.props;
			
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
				searchField={searchField} /> 
		);
	}
};

export default compose(
	withFileService(),
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(FileListContainer);