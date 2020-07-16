import React from 'react';

import { filesFilter } from './utils';

import FileListItem from '../item';

const FileList = ({ section, files, searchField, changeFileTag }) => {
	return (
		<div className="table-responsive">
			<table className="table table-sm">
				<thead>
					<tr>
						<th>&#9872;</th>
						<th>Name</th>
						<th>Size</th>
						<th>Type</th>
						<th>Date added</th>
					</tr>
				</thead>
				<tbody>
					{
						files
							.filter((file) => filesFilter(file, searchField, section))
							.sort((fileA, fileB) => {
								return fileA.name.localeCompare(fileB.name);
							})
							.map((file) => {
							return (
								<FileListItem 
									key={file.id} 
									file={file} 
									changeFileTag={changeFileTag}/>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
};

export default FileList;