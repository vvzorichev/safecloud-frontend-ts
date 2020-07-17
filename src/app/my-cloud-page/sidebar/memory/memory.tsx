import React from 'react';

const Memory: React.FC<{memory: string | null}> = ({ memory }) => {
	return (
		<div className="d-flex flex-column">
			<h5 className="sidebar-heading px-3 mt-4 mb-1 text-muted">
				<span>Memory used</span>
			</h5>
				<span className="d-flex justify-content mt-2 ml-5">
					{memory}
				</span>
		</div>
	)
};

export default Memory;