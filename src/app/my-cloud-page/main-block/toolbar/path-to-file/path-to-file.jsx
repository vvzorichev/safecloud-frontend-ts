import React from 'react';

const PathToFile = ({ path }) => {
	return (
		<div>
			<span className="h4">Cloud Drive  &rsaquo; </span>
			{
				path.map((pathElement) => {
					return <span className="h4">{pathElement} &rsaquo; </span>;
				})
			}
		</div>
	);
};

export default PathToFile;