import React from 'react';

import { MemoryServiceConsumer } from '../services-context';

const withMemoryService = () => (Wrapped) => {
	return (props) => {
		return (
			<MemoryServiceConsumer>
				{
					(memoryService) => {
						return (
							<Wrapped {...props} memoryService={memoryService}/>
						);
					}
				}
			</MemoryServiceConsumer>
		);
	};
};

export default withMemoryService;