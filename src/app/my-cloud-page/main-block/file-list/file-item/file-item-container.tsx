import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import { connect } from 'react-redux';
import { compose } from '../../../../common/utils';

import { onOpenFolder } from '../../duck/actions';
import { changeFileTag } from '../duck/actions';

import FileItem from './file-item';

import { IFileItemState } from "./interfaces/i-file-item";

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators({
		changeFileTag,
		onOpenFolder
	}, dispatch);
};

export type IDispatch = ReturnType<typeof  mapDispatchToProps>;

type IProps = IDispatch & IFileItemState & RouteComponentProps;

const FileItemContainer: React.FC<IProps> = ({ file, changeFileTag, onOpenFolder, history }) => {

	const handleFolderOpening = () => {
		if (history.location.pathname !== '/mycloud/drive') {
			history.replace('/mycloud/drive');
		}
		onOpenFolder(file.name);
	};

	if (file.type === 'folder') {
		return (
			<FileItem
				file={file}
				changeFileTag={changeFileTag}
				onOpenFolder={handleFolderOpening} />
		)
	}

	return (
		<FileItem
			file={file}
			changeFileTag={changeFileTag} />
	);
};

export default compose(
	connect(null, mapDispatchToProps),
	withRouter
)(FileItemContainer);