import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../component/utils';

import { onOpenFolder } from '../../actions';
import { changeFileTag } from '../actions';

import FileListItem from './file-list-item.jsx';

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeFileTag,
		onOpenFolder
	}, dispatch);
};

const FileListItemContainer = ({ file = {}, changeFileTag, onOpenFolder, history }) => {

	const handleFolderOpening = () => {
		if (history.location.pathname !== '/mycloud/drive') {
			history.replace('/mycloud/drive');
		}
		onOpenFolder(file.name);
	};

	if (file.type === 'folder') {
		return (
			<FileListItem 
			file={file}
			changeFileTag={changeFileTag}
			onOpenFolder={handleFolderOpening} />
		)
	}

	return (
		<FileListItem 
			file={file}
			changeFileTag={changeFileTag} />
	);
};

export default compose(
	connect(null, mapDispatchToProps),
	withRouter
)(FileListItemContainer);