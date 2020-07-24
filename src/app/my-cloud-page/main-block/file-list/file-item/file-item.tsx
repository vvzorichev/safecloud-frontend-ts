import React from 'react';

import Checkbox from '../../../../common/checkbox';

import './file-item.css';

import { IFileItem, IFileItemState } from "./interfaces/i-file-item";
import { IAction } from "../duck/i-file-list";

interface IProps extends IFileItemState {
	changeFileTag: (id: IFileItem['id']) => IAction;
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