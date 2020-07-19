import React from 'react';

const ErrorIndicator: React.FC = () => {
	return (
		<div className="alert d-flex flex-column">
			<h1 className="align-self-center">
				ERROR!
			</h1>
			<h3 className="align-self-center">
				Something went wrong. Please reload the page
			</h3>
		</div>
	);
};

export default ErrorIndicator;