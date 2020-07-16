import React, { useState } from 'react'

const Checkbox = ({ 
	value = null,
	id = "checkbox",
	isTagged = false,
	changeFileTag }) => {
	
	const [ tag, setTag ] = useState(isTagged);

	const withValue = value && 'mb-2 mt-2';
	
	const label = (
		<label className="custom-control-label" htmlFor={id}>
			{value}
		</label>
	);

	return (
		<div className={`custom-control custom-checkbox ${withValue}`}>
			<input 
				type="checkbox" 
				className="custom-control-input" 
				id={id} 
				checked={tag} 
				onChange={() => {
					setTag(!tag);
					changeFileTag(id);
				}} />
			{label}
		</div>
	);
};

export default Checkbox;