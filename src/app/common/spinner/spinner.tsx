import React from 'react';

const Spinner: React.FC = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="spinner-grow" role="status" />
			<div className="spinner-grow" role="status" />
			<div className="spinner-grow" role="status" />
		</div>	
	)
};

export default Spinner;