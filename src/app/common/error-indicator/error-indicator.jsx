import React from 'react';

const ErrorIndicator = () => {
	return (
		<div class="alert d-flex flex-column">
			<h1 class="align-self-center">
				ERROR!
			</h1>
			<h3 class="align-self-center">
				Something went wrong. Please reload the page
			</h3>
		</div>
	);
};

export default ErrorIndicator;