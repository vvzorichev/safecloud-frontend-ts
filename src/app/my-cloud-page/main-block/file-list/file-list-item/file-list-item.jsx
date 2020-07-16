import React from 'react';

import Checkbox from '../../../../common/checkbox';

import './file-list-item.css';

const FileListItem = ({ file, changeFileTag, onOpenFolder = null }) => {
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

export default FileListItem;