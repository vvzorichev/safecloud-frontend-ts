import React from 'react';

import { IState } from "./path-to-file-container";

const PathToFile: React.FC<IState> = ({ path }) => {
	return (
		<div>
			<span className="h4">Cloud Drive  &rsaquo; </span>
			{
				path.map((pathElement: string) => {
					return <span className="h4">{pathElement} &rsaquo; </span>;
				})
			}
		</div>
	);
};

export default PathToFile;