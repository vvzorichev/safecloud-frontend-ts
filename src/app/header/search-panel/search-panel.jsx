import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onChange }) => {
	return (
		<div className="search-panel">
			<input 
				type="text" 
				className="search-panel-input"
				placeholder="Search in Cloud"
				onChange={onChange}/>
		</div>
	);
};

export default SearchPanel;