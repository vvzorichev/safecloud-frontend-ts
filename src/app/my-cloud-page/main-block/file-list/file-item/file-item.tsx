import React from 'react';

import Checkbox from '../../../../common/checkbox';

import './file-item.css';

import {IFileItemState} from "./interfaces/i-file-item";

interface IProps extends IFileItemState {
	changeFileTag: () => void;
	onOpenFolder?: () => void;
};

const FileItem: React.FC<IProps> = ({ file, changeFileTag, onOpenFolder }) => {

	const { id, name, size, type, dateAdded, isTagged } = file;

	return (
		<tr>
			<td>
				<Checkbox
					id={id}
					isTagged={isTagged}
					changeFileTag={changeFileTag} />
			</td>
			<td className="file-name" onClick={onOpenFolder}>
				{name}
			</td>
			<td>{size}</td>
			<td>{type}</td>
			<td>{dateAdded}</td>
		</tr>
	);
};

export default FileItem;