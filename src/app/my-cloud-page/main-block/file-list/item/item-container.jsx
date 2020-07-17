import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../../../../common/utils';

import { onOpenFolder } from '../../duck/actions';
import { changeFileTag } from '../duck/actions';

import Item from './item';

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeFileTag,
		onOpenFolder
	}, dispatch);
};

const ItemContainer = ({ file = {}, changeFileTag, onOpenFolder, history }) => {

	const handleFolderOpening = () => {
		if (history.location.pathname !== '/mycloud/drive') {
			history.replace('/mycloud/drive');
		}
		onOpenFolder(file.name);
	};

	if (file.type === 'folder') {
		return (
			<Item
				file={file}
				changeFileTag={changeFileTag}
				onOpenFolder={handleFolderOpening} />
		)
	}

	return (
		<Item
			file={file}
			changeFileTag={changeFileTag} />
	);
};

export default compose(
	connect(null, mapDispatchToProps),
	withRouter
)(ItemContainer);